const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.disableNotifications();

mix.js("resources/js/app.js", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
    ])
    .webpackConfig(require("./webpack.config"));
mix.copy("resources/assets/", "public/assets");

if (mix.inProduction()) {
    mix.version();
}
