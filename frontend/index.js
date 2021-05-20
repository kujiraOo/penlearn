 const browserSync = require('browser-sync');

 browserSync.init({
     server: './src',
     files: ['./src/*.html', './src/*.css', './src/**/*.js']
 });
