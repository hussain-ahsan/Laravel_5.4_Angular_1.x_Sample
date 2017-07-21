const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
// assets directory path
var path = {
  angularLib: './resources/assets/js/angularlib/'
};
elixir(function(mix) {
  mix.less('styles.less', 'resources/assets/css/styles.css');
});
elixir(function(mix) {
  mix.styles([
    'bootstrap.min.css',
    'bootstrap-theme.min.css',
    'jquery.fancybox-plus.css'
  ]);
});
elixir(function(mix) {
  mix.scripts([
    'jquery-2.1.1.min.js',
    'jquery.fancybox-plus.js',
    'jquery.ba-bbq.min.js',
    'jquery-ui.js',
    'sugar.min.js',
    'bootstrap.min.js',
    'functions.js',
    path.angularLib + 'angular.1.5.7.js',
    path.angularLib + 'angular-route.js',
    path.angularLib + 'angular-animate.1.5.8.js',
    path.angularLib + 'angular-sanitize.1.5.8.js',
    path.angularLib + 'ui-bootstrap-tpls-2.2.0.js',
    path.angularLib + 'angular-middleware.js',
    path.angularLib + 'autocomplete.js',
    path.angularLib + 'app.js',
    path.angularLib + 'middlewareConfigure.js',
    path.angularLib + 'routes.js',
    path.angularLib + 'service.js',
    path.angularLib + 'factory.js',
    path.angularLib + 'directive.js',
    path.angularLib + 'angular-fancybox-plus.js',
    path.angularLib + 'controllers/HomeControllers.js'
  ]);
});


elixir(function(mix) {
  mix.version(['css/all.css', 'js/all.js']);
});

elixir(function(mix) {
  mix.browserSync({
    proxy: '',
    open:   false
  });
});
