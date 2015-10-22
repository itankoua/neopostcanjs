var gulp = require('gulp');
var tsc  = require('gulp-typescript-compiler');


// ======================================================
// Build TypeScript
// ======================================================
gulp.task('typescript', function () {
    return gulp
        .src('www/**/*.ts')
        .pipe(tsc({
            module: '',
            target: 'ES5',
            sourcemap: false,
            logErrors: true
        }))
        .pipe(gulp.dest('dist'));
});

// ======================================================
// Watch
// ======================================================
var watch = require('gulp-watch');
gulp.task('watch-ts', function () {
    return gulp.src('**/*.ts')
        .pipe(watch('**/*.ts'))
        .pipe(gulp.dest('build'));
});

// ======================================================
// Inject All CSS and JS Files (from dist to dist)
// Run the typescript task before
// ======================================================
var inject = require('gulp-inject');
gulp.task('index',['typescript'], function () {
    var target = gulp.src('www/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['dist/**/*.js', 'dist/**/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('dist'));
});


// ======================================================
// Default task
// ======================================================
gulp.task('default', ['index'], function() {

});


