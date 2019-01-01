const gulp = require('gulp');
const image = require('gulp-image');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('image', function () {
  return gulp.src('raw-images/**/*.{jpg,jpeg,gif,svg,png}')
  .pipe(image())
  .pipe(gulp.dest('./images'));
});

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('default', ['sass', 'image']);
