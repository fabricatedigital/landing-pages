var gulp = require('gulp');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');

gulp.task('template:fj', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'FabricateJS',
        description: 'node.js framework',
        ga: 'UA-93839334-3',
        email: 'info@fabricatejs.com'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./fabricatejs.com'))
});

gulp.task('template:sl', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'Savant LMS',
        description: 'learning management system',
        ga: 'UA-93839334-4',
        email: 'info@savantlms.com'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./savantlms.com'))
});

gulp.task('template:gl', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'Game Library',
        description: 'curate your game library',
        ga: 'UA-93839334-5',
        email: 'info@gamelibrary.io'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./gamelibrary.io'))
});

gulp.task('sass:fj', function (){
  return gulp.src('./scss/fabricatejs/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./fabricatejs.com/css'));
});

gulp.task('sass:sl', function (){
  return gulp.src('./scss/savantlms/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./savantlms.com/css'));
});

gulp.task('sass:gl', function (){
  return gulp.src('./scss/gamelibrary/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./gamelibrary.io/css'));
});

gulp.task('build', ['template:fj', 'template:sl', 'template:gl', 'sass:fj', 'sass:sl', 'sass:gl']);

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['sass:fj']);
  gulp.watch(['./index.ejs'], ['template:fj']);
});