const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');

mix.scripts([
  'abc',
  'resources/assets/js/jquery-2.1.1.min.js',
  'resources/assets/js/jquery.fancybox-plus.js',
  'resources/assets/js/jquery.ba-bbq.min.js',
  'resources/assets/js/sugar.min.js',
  'resources/assets/js/bootstrap.min.js',
  'resources/assets/js/functions.js',
  'resources/assets/js/angularlib/angular.1.5.7.js',
  'resources/assets/js/angularlib/angular-route.js',
  'resources/assets/js/angularlib/angular-animate.1.5.8.js',
  'resources/assets/js/angularlib/angular-sanitize.1.5.8.js',
  'resources/assets/js/angularlib/ui-bootstrap-tpls-2.2.0.js',
  'resources/assets/js/angularlib/angular-middleware.js',
  'resources/assets/js/angularlib/autocomplete.js',
  'resources/assets/js/angularlib/app.js',
  'resources/assets/js/angularlib/middlewareConfigure.js',
  'resources/assets/js/angularlib/routes.js',
  'resources/assets/js/angularlib/service.js',
  'resources/assets/js/angularlib/factory.js',
  'resources/assets/js/angularlib/directive.js',
  'resources/assets/js/angularlib/angular-fancybox-plus.js',
  'resources/assets/js/angularlib/controllers/HomeControllers.js',
], 'public/js/all.js');
