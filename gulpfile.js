"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", gulp.series("sass"));
});
