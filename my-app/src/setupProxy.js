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
  // Proxy all /api/* requests → Express backend (port 3001)
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      logLevel: 'silent',
      onError: (err, req, res) => {
        console.warn(
          '[Proxy] Backend not reachable. Start the server with: npm run server\n',
          err.message
        );
        res.status(503).json({
          success: false,
          error: 'Backend server is not running. Start it with: npm run server',
        });
      },
    })
  );
};
