/* eslint-disable */
console.log('[setupProxy] registering middlewares');
const { createProxyMiddleware } = require('http-proxy-middleware');
console.log('[setupProxy] initializing proxy middlewares for /api and /ws');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    ws: true,
    logLevel: 'debug'
  }));

  // optional: only used if you later add a WS server on 4001
  app.use('/ws', createProxyMiddleware({
    target: 'ws://localhost:4001',
    changeOrigin: true,
    ws: true,
    logLevel: 'debug'
  }));
  console.log('[setupProxy] proxy middlewares registered');
};
