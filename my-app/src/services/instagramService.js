/**
 * instagramService.js
 * Frontend service layer for Instagram data.
 *
 * Architecture:
 *   Home.js → instagramService.js → /api/instagram → server/index.js → Meta Graph API
 *
 * This file NEVER contains the Meta access token.
 * All Meta API calls happen server-side (server/index.js).
 */

const INSTAGRAM_ENDPOINT = '/api/instagram';

/**
 * Minimum number of slides for the Swiper loop to work smoothly.
 * If the API returns fewer posts, we duplicate them client-side
 * to ensure a seamless carousel. The backend data itself is never polluted.
 */
const MIN_SLIDES_FOR_LOOP = 12;

/**
 * Static fallback profile shown when the API is unavailable.
 * Does NOT contain fake follower/post counts — those fields are
 * intentionally omitted so the UI shows nothing rather than fake numbers.
 */
const PROFILE_FALLBACK = {
  username: 'veronic_infotech',
  name: 'Veronic Infotech',
  profilePicture: '',
  biography: 'Business-Driven IT & Business Software Solutions 🚀',
};

/**
 * Fetch Instagram profile and posts from the secure backend API.
 *
 * Returns:
 * {
 *   profile: { username, name, profilePicture, biography, followers, following, posts },
 *   media:   [ { id, image, url, caption, likes, comments, username, date, media_type } ],
 *   lastUpdated: ISO string,
 *   fromCache: boolean,
 * }
 *
 * Throws if the backend is unreachable or returns a non-OK status.
 */
export async function getInstagramFeed() {
  let raw;

  try {
    const response = await fetch(INSTAGRAM_ENDPOINT, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      // Rely on backend cache — always ask for fresh data from the backend's perspective
      // The backend itself caches for 15 minutes, so this is not wasteful.
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(
        errorBody.error ||
        `Instagram API responded with ${response.status}`
      );
    }

    raw = await response.json();
  } catch (err) {
    throw new Error(`Failed to reach Instagram backend: ${err.message}`);
  }

  if (!raw.success || !raw.data) {
    throw new Error(raw.error || 'Instagram backend returned an unexpected response.');
  }

  const { profile: rawProfile, posts: rawPosts } = raw.data;

  // ── Normalize profile ────────────────────────────────────────────────────────
  const profile = {
    username: rawProfile?.username || PROFILE_FALLBACK.username,
    name: rawProfile?.name || PROFILE_FALLBACK.name,
    profilePicture: rawProfile?.profilePicture || PROFILE_FALLBACK.profilePicture,
    biography: rawProfile?.biography || PROFILE_FALLBACK.biography,
    followers: rawProfile?.followers,
    following: rawProfile?.following,
    posts: rawProfile?.posts,
  };

  // ── Normalize posts ──────────────────────────────────────────────────────────
  // Backend already returns the correct shape, but we validate here defensively.
  let media = (rawPosts || []).map((post, index) => ({
    id: post.id || String(index),
    image: post.image || '',
    url: post.url || `https://www.instagram.com/${profile.username}/`,
    caption: post.caption || '',
    likes: typeof post.likes === 'number' ? post.likes : undefined,
    comments: typeof post.comments === 'number' ? post.comments : undefined,
    username: post.username || profile.username,
    date: post.date || null,
    media_type: post.media_type || 'IMAGE',
  }));

  // ── Swiper loop padding ──────────────────────────────────────────────────────
  // Swiper's loop={true} needs at least twice the visible slides to loop smoothly.
  // If the API returns fewer than MIN_SLIDES_FOR_LOOP unique posts, we duplicate
  // them with suffixed IDs so React keys stay unique. The real post data is unchanged.
  if (media.length > 0 && media.length < MIN_SLIDES_FOR_LOOP) {
    const original = [...media];
    let iteration = 1;
    while (media.length < MIN_SLIDES_FOR_LOOP) {
      // eslint-disable-next-line no-loop-func
      const suffix = iteration;
      media = media.concat(
        original.map((m) => ({ ...m, id: `${m.id}_loop${suffix}` }))
      );
      iteration++;
    }
  }

  return {
    profile,
    media,
    lastUpdated: raw.lastUpdated || new Date().toISOString(),
    fromCache: raw.cached || false,
  };
}
