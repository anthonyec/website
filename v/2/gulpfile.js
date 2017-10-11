//  Dependencies

var fs = require('fs'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gulputil = require('gulp-util'),
    sass = require('gulp-ruby-sass');


//  Config Import

var package = require('./package.json'),
    globs = package.globs,
    config = package.config,
    output = package.output;

// Tasks

gulp.task('scripts', function () {
  return gulp.src(globs.task.js)
    .pipe(concat(output.js.name))
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest(output.js.dest));
});

gulp.task('sass', function () {
  return gulp.src(globs.task.sass)
    .pipe(sass(config.sass)).on('error', gulputil.log)
    .pipe(gulp.dest(output.sass.dest));
});

gulp.task('default', function() {
    gulp.start('scripts', 'sass');
});


// Watch Tasks

gulp.task('watch', function () {
  gulp.watch(globs.watch.sass, function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('sass');
  });

  gulp.watch(globs.watch.js, function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('scripts');
  });
});