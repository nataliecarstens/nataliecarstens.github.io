var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

gulp.task('copy', function () {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

gulp.task('log', function () {
  gutil.log('--first log task---')
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});

gulp.task('coffee', function () {
  gulp.src('scripts/hello.coffee')
  .pipe(coffee({bare:true})
    .on('error', gutil.log))
  .pipe(gulp.dest('scripts'))
});
