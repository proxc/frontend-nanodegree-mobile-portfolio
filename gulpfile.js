'use strict';

let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssuglify = require('gulp-uglifycss');

gulp.task('css', () => {

});

gulp.task('js', () => {

});

gulp.task('images', () => {
    return gulp.src('./img/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
});

gulp.task('watch', () => {
  console.log('\n', "\x1b[35m", "  Start watch task", '\n');
  gulp.watch('./views/js/main.js', ['js']);
});

gulp.task('default', ['watch'], () => {
  console.log('\n',"\x1b[34m", "  Starting build process",'\n');

});