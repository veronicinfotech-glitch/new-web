# ⚠️ DEPRECATED — Instagram Scraping Scripts

The following files in this directory are **no longer used** for production Instagram data.

They were replaced by the official Meta Instagram Graph API integration
implemented in `server/instagram.js` and `server/index.js`.

| File | Old purpose | Status |
|---|---|---|
| `update-instagram.js` | Scraped via `curl` + fake `x-ig-app-id` header | **Deprecated** |
| `fetch-live-ig.js` | Scraped via `instagram-web-api` login session | **Deprecated** |
| `update_instagram.py` | Used Instaloader (wrong username: `veronic_information_technology`) | **Deprecated** |
| `scrape-ig.js` | Puppeteer headless browser scraper | **Deprecated** |
| `update-feed.js` | Puppeteer scraper (wrong username: `veronic_information_technology`) | **Deprecated** |
| `auto-fetch.js` | Auto-trigger for scraping scripts | **Deprecated** |

These files are **not imported or executed** by any production code. They can be
safely deleted once the Meta API integration is confirmed working and you no longer
need them as a reference.

## Why Scraping Was Replaced

- Instagram's internal API (`/api/v1/users/web_profile_info/`) is not a public API.
  Using it with a fake `x-ig-app-id` header violates Instagram's Terms of Service.
- Instaloader and Puppeteer approaches are fragile and break whenever Instagram
  updates its front-end or rate-limits requests.
- The official Meta Instagram Graph API provides stable, ToS-compliant access with
  proper authentication.

## New Architecture

```
React Home.js
    ↓
instagramService.js  (calls /api/instagram)
    ↓
server/index.js      (Express backend, port 3001, reads .env.server)
    ↓
server/instagram.js  (Meta Graph API v19.0)
    ↓
Meta Graph API
    ↓
@veronic_infotech Instagram Professional Account
```

## Required Credentials

See `.env.server.example` for the environment variables needed.
