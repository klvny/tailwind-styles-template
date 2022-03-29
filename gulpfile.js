const { src, dest, parallel } = require("gulp");
const clear = require("gulp-clean");
const rename = require("gulp-rename");
const dartSass = require("sass");
const scss = require("gulp-sass")(dartSass);
const postcss = require("gulp-postcss");
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssSort = require('postcss-sorting');
const cssnano = require('cssnano');

function clean(cb) {
  src("dist", { read: false }).pipe(clear());
  cb();
}

function css(cb) {
  src("src/index.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(
      postcss()
    )
    .pipe(dest("dist"));
  cb();
}

function mini(cb) {
    src("src/index.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(
      postcss([
          postcssImport(),
          tailwindcss(),
          autoprefixer(),
          postcssSort(),
          cssnano()
      ])
    )
    .pipe(rename('index.min.css'))
    .pipe(dest("dist"));
  cb();
}

exports.clean = clean
exports.default =  parallel(css, mini)
