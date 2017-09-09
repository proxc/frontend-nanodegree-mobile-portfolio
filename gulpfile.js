"use strict";

let gulp = require("gulp");
let browserify = require("browserify");
let browserSync = require("browser-sync");
let autoprefixer = require("gulp-autoprefixer");
let minifycss = require("gulp-uglifycss");
let concat = require("gulp-concat");
let notify = require("gulp-notify");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");

//path configs
let dirRoot = "../";

gulp.task("sass", () => {
  return gulp
    .src(dirRoot + "sass/*.sass")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(plumber.stop())
    .pipe(gulp.dest(dirRoot + "css"))
    .pipe(browserSync.stream());
});

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    // proxy: {
    //   target: "localhost",
    //   ws: true
    // },
    open: false
  });
});

gulp.task("watch", () => {
  gulp.watch(dirRoot + "sass/components/**/*.sass", ["sass"]);
  gulp.watch(dirRoot + "sass/components/**/*.scss", ["sass"]);
  gulp.watch(dirRoot + "*.html").on("change", browserSync.reload);
});

gulp.task("default", ["watch", "browser-sync"], () => {
  console.log("Time to build some shit");
});
