var gulp = require('gulp');
var tsc  = require('gulp-typescript-compiler');
var path = require('path');
var clean = require('gulp-clean');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var paths = {
    src : "www",
    dist : "dist",
    test : "test",
    tmp : "tmp",
    build : "build"
};

// ======================================================
// Build TypeScript
// ======================================================
gulp.task('typescript', function () {
    return gulp
        .src('www/**/*.ts')
        .pipe(tsc({
            module: '',
            target: 'ES6',
            sourcemap: false,
            logErrors: true
        }))
        .pipe(gulp.dest(paths.tmp));
});

// ======================================================
// Watch
// ======================================================
var watch = require('gulp-watch');
gulp.task('watch-ts', function () {
    return gulp.src('**/*.ts')
        .pipe(watch('**/*.ts'))
        .pipe(gulp.dest(paths.build));
});

// ======================================================
// Inject All CSS and JS Files (from dist to dist)
// Run the typescript task before
// ======================================================
var inject = require('gulp-inject');
gulp.task('inject',['typescript'], function () {
    var target = gulp.src('www/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src([path.join(paths.tmp,'/**/*.js'),
                            path.join(paths.tmp,'/**/*.css')]
                            ,{read: false});

    var injectOptions = {
        ignorePath: [paths.tmp, path.join(paths.tmp, '/src')],
        addRootSlash: false
    };

    return target.pipe(inject(sources,injectOptions))
        .pipe(gulp.dest(paths.dist));
});

// ======================================================
// Build task
// ======================================================
gulp.task('build', ['inject'], function() {

    var sources = gulp.src([path.join(paths.tmp,'/**/*.js'),
            path.join(paths.tmp,'/**/*.css')]);

    return sources.pipe(gulp.dest(paths.dist));

});

// ======================================================
// Watch task
// ======================================================

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

    gulp.watch([path.join(paths.src, '/*.html'), 'bower.json'], ['inject']);

    gulp.watch([
        path.join(paths.src, '/**/*.css'),
        path.join(paths.src, '/**/*.scss')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles');
        } else {
            gulp.start('inject');
        }
    });

    gulp.watch(path.join(paths.src, '/**/*.js'), function(event) {
        if(isOnlyChange(event)) {
            gulp.start('scripts');
        } else {
            gulp.start('inject');
        }
    });

    gulp.watch(path.join(paths.src, '/**/*.html'), function(event) {
        gulp.start('inject');
        browserSync.reload(event.path);
    });
});

// ======================================================
// Serve task
// ======================================================

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if(baseDir === paths.src || (util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1)) {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    var server = {
        baseDir: baseDir,
        routes: routes
    };

    /*
     * You can add a proxy to your backend by uncommenting the line bellow.
     * You just have to configure a context which will we redirected and the target url.
     * Example: $http.get('/users') requests will be automatically proxified.
     *
     * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
     */
    // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
    browserSyncInit([paths.dist, paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
    browserSyncInit(paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
    browserSyncInit([paths.tmp , paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
    browserSyncInit(paths.dist, []);
});

