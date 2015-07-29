'use strict';

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'), // minify js
    jshint  = require('gulp-jshint'), // linting
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'), // Scss, sass
    autoprefixer = require('gulp-autoprefixer'), // add prefixes on specific css rules
    minifycss = require('gulp-minify-css'), // minify css
    concat = require('gulp-concat'), // concatinate files
    spritesmith = require('gulp.spritesmith'), // generate scss with sprites info
    plumber = require('gulp-plumber'), // if any error gulp is not break
    ngAnnotate = require('gulp-ng-annotate'),
    htmlmin = require('gulp-htmlmin'),
    imageop = require('gulp-image-optimization');


// process JS files and return the stream.
//gulp.task('js', function () {
//    return gulp.src('js/*js')
//        .pipe(plumber())
//        .pipe(uglify());
//        //.pipe(gulp.dest('dist/js'));
//});


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
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('public/'));
});

// Lint js
gulp.task('jshint', function () {
  return gulp.src('js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

//generate styles from scss files and minify it
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
      .pipe(plumber())
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer({
        browsers: ['last 30 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('css'))
      .pipe(minifycss())
      .pipe(gulp.dest('public/css'));
});

//generate scss with sprites
gulp.task('sprite', function() {
  var spriteData =
      gulp.src('./images/icons/*.*') // source path of the sprite images
          .pipe(spritesmith({
            imgName: '../img/sprite.png',
            cssName: '_sprite.scss',
            cssFormat: 'scss',
            algorithm: 'binary-tree'
          }));

  spriteData.img.pipe(gulp.dest('./img/')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('./scss/base/')); // output path for the CSS
});

gulp.task('templates', function() {
  return gulp.src('templates/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/templates'));
});

gulp.task('htmlIndex', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/'));
});

//watchers
gulp.task('watch', function(){
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("js/**/*.js", ['jshint', 'js']);
  gulp.watch(['./*.html'], ['htmlIndex']);
  gulp.watch(['./templates/**.*.html'], ['templates']);
});

gulp.task('serve', ['sprite', 'images', 'sass', 'js', 'htmlIndex', 'templates', 'watch']);

gulp.task('default', ['sprite', 'sass', 'js'], function () {});