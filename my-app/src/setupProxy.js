/**
 * setupProxy.js
 * CRA development proxy configuration.
 *
 * Forwards /api/instagram requests to the local Express backend
 * running on port 3001 (server/index.js).
 *
 * This file is ONLY used during `npm start` (development).
 * In production, configure your web server (Nginx, Apache, etc.)
 * to proxy /api/* to your backend service.
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // http-proxy-middleware v4: mounting on '/api' strips the prefix.
  // Mount on '/' with a filter so /api/* is forwarded with the full path intact.
  app.use(
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathFilter: '/api',
      on: {
        error: (err, req, res) => {
          console.warn(
            '[Proxy] Backend not reachable. Start the server with: npm run server\n',
            err.message
          );
          res.writeHead(503, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: 'Backend server is not running. Start it with: npm run server',
          }));
        },
      },
    })
  );
};
