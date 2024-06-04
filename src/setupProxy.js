// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://freeapi.miniprojectideas.com',
            changeOrigin: true,
        })
    );
};
