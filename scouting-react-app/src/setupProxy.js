// src/setupProxy.js
// Proxy /api/* to dev API server on port 5001 during CRA dev
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5001',
      changeOrigin: true,
      logLevel: 'warn',
    })
  );
};
