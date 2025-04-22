let mix = require('laravel-mix');

mix
    .js("src/scripts/main.js", "build")
    .setPublicPath('build')
    .postCss("src/styles/main.css", "build")
    .version()
    .browserSync({
        server: true
    });