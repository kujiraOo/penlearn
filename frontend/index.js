 const browserSync = require('browser-sync');
 const { createProxyMiddleware } = require('http-proxy-middleware');

 browserSync.init({
  server: './src',
  files: ['./src/*.html', './src/*.css', './src/**/*.js'],
  middleware: [
    {
      route: "/api",
      handle: createProxyMiddleware({
          target: 'http://localhost:3000'
      })
    }
  ]
 });
