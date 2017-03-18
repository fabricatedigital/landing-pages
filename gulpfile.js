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

gulp.task('sass:fj', function (){
  return gulp.src('./scss/fabricatejs/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./fabricatejs.com/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['sass:fj']);
  gulp.watch(['./index.ejs'], ['template:fj']);
});