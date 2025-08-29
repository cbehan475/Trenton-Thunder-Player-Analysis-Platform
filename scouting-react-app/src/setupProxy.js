/* eslint-disable */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    ws: true,
    logLevel: 'silent'
  }));

  // optional: only used if you later add a WS server on 4001
  app.use('/ws', createProxyMiddleware({
    target: 'ws://localhost:4001',
    changeOrigin: true,
    ws: true,
    logLevel: 'silent'
  }));
};
