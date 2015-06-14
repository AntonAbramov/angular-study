var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var htmlmin = require('gulp-htmlmin');
var compass = require('gulp-compass');

var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src(['img/**/*.png','img/**/*.jpg','img/**/*.gif','img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/img')).on('end', cb).on('error', cb);
});


gulp.task('js', function () {
  return gulp.src(['js/**/angular.min.js', 'js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('public/'));
});

gulp.task('html', function() {
  return gulp.src('templates/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/templates'));
});

gulp.task('htmlIndex', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/'));
});

gulp.task('compass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', ['html', 'htmlIndex', 'js', 'images', 'compass'], function () {
  gulp.watch('js/**/*.js', ['js'])
  gulp.watch('scss/**/*.scss', ['compass'])
})

