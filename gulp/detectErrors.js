var gulp = require('gulp');
var eslint = require('gulp-eslint');

function detectErrors() {
  return gulp.src(['gulpfile.js', 'src/**/*.js', 'gulp/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
}

module.exports = detectErrors;
