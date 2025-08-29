// src/setupProxy.js
// Proxy /api/* to dev API server on port 4001 during CRA dev
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4001',
      changeOrigin: true,
      ws: true,
      logLevel: 'silent',
    })
  );
};
