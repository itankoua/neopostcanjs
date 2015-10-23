/**
 * Created by Heliot.ext on 22/10/2015.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var inject = require('gulp-inject');

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
            .pipe(gulp.dest('dist/'));
});



gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('copyCss',['clean'], function () {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('copyJs',['copyCss'], function () {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('copyEjs',['copyJs'], function () {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('index',['copyEjs'], function () {
    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});


    return target.pipe(inject(sources,{
        ignorePath : ['src/'],
        addRootSlash : false
    }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['index']);