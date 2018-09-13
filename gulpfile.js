'use strict';
/* global require */

/**
 * @file gulpfile
 * @author Alexander Ivanov <oshli.a.er@gmail.com>
 * @see https://github.com/jsdoc2md/gulp-jsdoc-to-markdown
 */

var gulp = require('gulp');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var ap = require('gulp-append-prepend');
var log = require('fancy-log');

var src = './*.gs';
var jsdoc2mdConfig = undefined;

// makedocs task
gulp.task('makedocs', function() {
  return gulp
    .src(src)
    .pipe(concat('API.md'))
    .pipe(gulpJsdoc2md(jsdoc2mdConfig))
    .on('error', function(err) {
      log('jsdoc2md failed:', err.message);
    })
    .pipe(ap.prependFile('Prefix.md'))
    .pipe(gulp.dest('./'));
});

// makedocs:auto task
gulp.task('makedocs:auto', function() {
  gulp.watch('./*.gs', ['makedocs']);
});
