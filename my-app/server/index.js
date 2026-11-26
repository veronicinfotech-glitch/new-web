/**
 * server/index.js
 * Secure Express backend for the Veronic website.
 *
 * Provides /api/instagram endpoint that:
 *  - Reads INSTAGRAM_ACCESS_TOKEN from .env.server (never from the browser)
 *  - Calls the official Instagram API with Instagram Login (graph.instagram.com)
 *  - Caches results in-memory for CACHE_TTL_MS to avoid excessive API calls
 *  - Never returns the access token in any response
 *  - Returns graceful error responses so the React frontend degrades cleanly
 *
 * API used: Instagram API with Instagram Login
 * Permission: instagram_business_basic
 *
 * Start with:
 *   node server/index.js
 * or via npm script:
 *   npm run server
 */

'use strict';

// Load .env.server if present (for local development)
const path = require('path');
const fs = require('fs');

const envPath = path.resolve(__dirname, '..', '.env.server');
const envExists = fs.existsSync(envPath);
require('dotenv').config({ path: envPath });

console.log('[Server Startup Diagnostics]');
console.log(`- .env.server path: ${envPath}`);
console.log(`- .env.server file exists: ${envExists}`);
console.log(`- Detected INSTAGRAM_ACCESS_TOKEN: ${!!process.env.INSTAGRAM_ACCESS_TOKEN}`);
console.log(`- Detected INSTAGRAM_USER_ID: ${!!process.env.INSTAGRAM_USER_ID}`);
console.log(`- Detected PORT: ${process.env.PORT || 3001}`);

const express = require('express');
const { fetchInstagramData } = require('./instagram');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Cache ────────────────────────────────────────────────────────────────────
// Short in-memory cache: 15 minutes.
// Protects against hitting the Meta API on every page load.
const CACHE_TTL_MS = 15 * 60 * 1000;

let cache = {
  data: null,
  timestamp: null,
};

function isCacheValid() {
  return cache.data !== null && cache.timestamp !== null &&
    Date.now() - cache.timestamp < CACHE_TTL_MS;
}

// ─── CORS (allow React dev server on port 3000) ───────────────────────────────
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    // Add your production domain here if needed:
    // 'https://www.veronic.in'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// ─── /api/instagram ───────────────────────────────────────────────────────────
app.get(['/api/instagram', '/instagram'], async (req, res) => {
  // Allow bypassing cache with ?nocache=1 for debugging
  const bypassCache = req.query.nocache === '1';

  // Return cached data if still fresh
  if (!bypassCache && isCacheValid()) {
    return res.json({
      success: true,
      data: cache.data,
      cached: true,
      lastUpdated: new Date(cache.timestamp).toISOString(),
    });
  }

  // Only the access token is required — the Instagram Login API /me endpoint
  // resolves the account from the token itself (no numeric user ID needed).
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    console.error(
      '[Instagram] Missing INSTAGRAM_ACCESS_TOKEN in environment. ' +
      'Copy .env.server.example to .env.server and fill in your credentials.'
    );
    return res.status(503).json({
      success: false,
      error: 'Instagram API is not configured. Missing INSTAGRAM_ACCESS_TOKEN.',
      configured: false,
    });
  }

  try {
    console.log('[Instagram] Fetching fresh data from Instagram API (graph.instagram.com)...');
    const { profile, posts } = await fetchInstagramData(accessToken, 20);

    const responseData = { profile, posts };

    // Store in cache
    cache.data = responseData;
    cache.timestamp = Date.now();

    console.log(
      `[Instagram] Success — ${posts.length} posts, ` +
      `${profile.followers} followers. Cached until ${new Date(cache.timestamp + CACHE_TTL_MS).toLocaleTimeString()}.`
    );

    return res.json({
      success: true,
      data: responseData,
      cached: false,
      lastUpdated: new Date(cache.timestamp).toISOString(),
    });

  } catch (error) {
    // Log the error server-side with details but never expose the token or internals to the browser
    console.error('[Instagram] Backend failure caught:', error.message);

    // If we have stale cached data, return it as a fallback with a warning
    if (cache.data) {
      console.warn('[Instagram] Returning stale cached data as fallback.');
      return res.json({
        success: true,
        data: cache.data,
        cached: true,
        stale: true,
        lastUpdated: new Date(cache.timestamp).toISOString(),
      });
    }

    return res.status(502).json({
      success: false,
      error: 'Failed to fetch Instagram data. Please try again later.',
      diagnosticMessage: error.message,
    });
  }
});

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'veronic-instagram-api',
    // Only the access token is required for the Instagram Login flow
    configured: !!process.env.INSTAGRAM_ACCESS_TOKEN,
    cacheValid: isCacheValid(),
    cacheAge: cache.timestamp ? Math.round((Date.now() - cache.timestamp) / 1000) + 's' : null,
  });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Veronic Instagram API server running on http://localhost:${PORT}`);

  if (!process.env.INSTAGRAM_ACCESS_TOKEN) {
    console.warn(
      '⚠️  WARNING: INSTAGRAM_ACCESS_TOKEN is not set.\n' +
      '   Copy .env.server.example → .env.server and add your Instagram token.\n' +
      '   The /api/instagram endpoint will return 503 until credentials are provided.'
    );
  } else {
    console.log('🔑  Instagram access token detected — API is ready.');
    console.log('   Using: Instagram API with Instagram Login (graph.instagram.com)');
    console.log('   Permission: instagram_business_basic');
  }
});

module.exports = app;
