var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('nodemon');

gulp.task('build', function () {
    return browserify({ entries: './public/javascripts/game.js', debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source('game.js'))
        .pipe(gulp.dest('dist/javascripts'));
});

gulp.task('start', function () {
  nodemon({
    script: './bin/www'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('watch', ['build'], function () {
    gulp.watch('./public/javascripts/*.js', ['build']);
});

gulp.task('default', ['watch', 'start']);