/**
 * server/instagram.js
 * Server-side module for the Meta "Instagram API with Instagram Login".
 *
 * This file runs ONLY on the backend (Node.js/Express).
 * The INSTAGRAM_ACCESS_TOKEN is NEVER sent to the browser.
 *
 * API used: Instagram API with Instagram Login
 * Base URL: https://graph.instagram.com  (NOT graph.facebook.com)
 * Permission required: instagram_business_basic
 * Docs: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login
 */

'use strict';

const fetch = require('node-fetch');

// Use graph.instagram.com — this is the correct host for the
// "Instagram API with Instagram Login" flow.
const GRAPH_API_VERSION = 'v22.0';
const GRAPH_BASE = `https://graph.instagram.com/${GRAPH_API_VERSION}`;

/**
 * Fetch the authenticated user's Instagram profile.
 *
 * Fields available with instagram_business_basic:
 *   id, username, name, biography, profile_picture_url,
 *   followers_count, follows_count, media_count, website
 *
 * Note: likes/comments per post are NOT profile fields — see fetchMedia().
 */
async function fetchProfile(accessToken) {
  const fields = [
    'id',
    'username',
    'name',
    'profile_picture_url',
    'biography',
    'followers_count',
    'follows_count',
    'media_count',
  ].join(',');

  // /me resolves to the account that owns the token — no numeric user ID needed.
  const url = `${GRAPH_BASE}/me?fields=${fields}&access_token=${accessToken}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || data.error) {
    const msg = data.error
      ? `[${data.error.code}] ${data.error.message}`
      : `HTTP ${response.status}`;
    throw new Error(`Instagram profile API error: ${msg}`);
  }

  return {
    username: data.username || 'veronic_infotech',
    name: data.name || 'Veronic Infotech',
    profilePicture: data.profile_picture_url || '',
    biography: data.biography || '',
    // These counts ARE available via instagram_business_basic
    followers: typeof data.followers_count === 'number' ? data.followers_count : null,
    following: typeof data.follows_count === 'number' ? data.follows_count : null,
    posts: typeof data.media_count === 'number' ? data.media_count : null,
  };
}

/**
 * Fetch the latest Instagram media for the authenticated user.
 *
 * Fields available with instagram_business_basic on /me/media:
 *   id, caption, media_type, media_url, thumbnail_url,
 *   permalink, timestamp, username
 *
 * NOTE: like_count and comments_count require additional permissions
 * beyond instagram_business_basic (specifically instagram_business_manage_insights
 * or being in development mode where only the app owner can grant them).
 * We request them optimistically — if the API returns them, we use them;
 * if not, they are omitted rather than faked.
 */
async function fetchMedia(accessToken, limit = 20) {
  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'permalink',
    'timestamp',
    'username',
    // Requested optimistically — may not be granted by instagram_business_basic alone:
    'like_count',
    'comments_count',
  ].join(',');

  const url = `${GRAPH_BASE}/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || data.error) {
    const msg = data.error
      ? `[${data.error.code}] ${data.error.message}`
      : `HTTP ${response.status}`;
    throw new Error(`Instagram media API error: ${msg}`);
  }

  const rawPosts = data.data || [];

  const posts = rawPosts.map((post) => {
    // For VIDEO posts, thumbnail_url is the still image shown in the feed.
    // For IMAGE and CAROUSEL_ALBUM, media_url is the image.
    let imageUrl = post.media_url || '';
    if (post.media_type === 'VIDEO' && post.thumbnail_url) {
      imageUrl = post.thumbnail_url;
    }

    return {
      id: post.id,
      image: imageUrl,
      url: post.permalink || 'https://www.instagram.com/veronic_infotech/',
      caption: post.caption || '',
      // Only set likes/comments when the API actually returns them.
      // Do NOT default to 0 to avoid showing false zero-count badges.
      likes: typeof post.like_count === 'number' ? post.like_count : null,
      comments: typeof post.comments_count === 'number' ? post.comments_count : null,
      username: post.username || 'veronic_infotech',
      date: post.timestamp || null,
      media_type: post.media_type || 'IMAGE',
    };
  });

  return posts;
}

/**
 * Main export: fetch both profile and media in parallel.
 *
 * The accessToken is sufficient — INSTAGRAM_USER_ID is NOT required by
 * the "Instagram API with Instagram Login" flow (/me resolves from the token).
 *
 * Returns { profile, posts } or throws on API failure.
 */
async function fetchInstagramData(accessToken, mediaLimit = 20) {
  const [profile, posts] = await Promise.all([
    fetchProfile(accessToken),
    fetchMedia(accessToken, mediaLimit),
  ]);

  return { profile, posts };
}

module.exports = { fetchInstagramData };
