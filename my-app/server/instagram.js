/**
 * server/instagram.js
 * Server-side module for the Meta "Instagram API with Instagram Login".
 *
 * This file runs ONLY on the backend (Node.js/Express).
 * The INSTAGRAM_ACCESS_TOKEN is NEVER sent to the browser or logged in plain text.
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

function sanitizeUrl(url) {
  return url.replace(/access_token=[^&]+/g, 'access_token=[REDACTED]');
}

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
  const safeUrl = sanitizeUrl(url);

  console.log(`[Instagram Diagnostics] Calling Profile Endpoint: ${safeUrl}`);

  const response = await fetch(url);
  const rawText = await response.text();

  console.log(`[Instagram Diagnostics] Profile Response Status: ${response.status} ${response.statusText}`);

  let data;
  try {
    data = JSON.parse(rawText);
  } catch (parseErr) {
    console.error(`[Instagram Diagnostics] Profile Response was not JSON:`, rawText);
    throw new Error(`Profile endpoint returned non-JSON response (HTTP ${response.status})`);
  }

  if (!response.ok || data.error) {
    console.error(`[Instagram Diagnostics] Meta Profile API Error Body:`, JSON.stringify(data, null, 2));
    const msg = data.error
      ? `[${data.error.code}${data.error.error_subcode ? ':' + data.error.error_subcode : ''}] ${data.error.message} (${data.error.type || 'Error'})`
      : `HTTP ${response.status}`;
    throw new Error(`Instagram profile API error: ${msg}`);
  }

  console.log(`[Instagram Diagnostics] Profile fetched successfully for username: ${data.username}`);

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
  const safeUrl = sanitizeUrl(url);

  console.log(`[Instagram Diagnostics] Calling Media Endpoint: ${safeUrl}`);

  const response = await fetch(url);
  const rawText = await response.text();

  console.log(`[Instagram Diagnostics] Media Response Status: ${response.status} ${response.statusText}`);

  let data;
  try {
    data = JSON.parse(rawText);
  } catch (parseErr) {
    console.error(`[Instagram Diagnostics] Media Response was not JSON:`, rawText);
    throw new Error(`Media endpoint returned non-JSON response (HTTP ${response.status})`);
  }

  if (!response.ok || data.error) {
    console.error(`[Instagram Diagnostics] Meta Media API Error Body:`, JSON.stringify(data, null, 2));
    const msg = data.error
      ? `[${data.error.code}${data.error.error_subcode ? ':' + data.error.error_subcode : ''}] ${data.error.message} (${data.error.type || 'Error'})`
      : `HTTP ${response.status}`;
    throw new Error(`Instagram media API error: ${msg}`);
  }

  const rawPosts = data.data || [];

  console.log(`[Instagram Diagnostics] Media fetched successfully: ${rawPosts.length} posts found.`);

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
  console.log('[Instagram Diagnostics] Step 1: Fetching profile...');
  console.log('[Instagram Diagnostics] Step 2: Fetching media posts...');

  const [profile, posts] = await Promise.all([
    fetchProfile(accessToken),
    fetchMedia(accessToken, mediaLimit),
  ]);

  return { profile, posts };
}

module.exports = { fetchInstagramData, fetchProfile, fetchMedia };
