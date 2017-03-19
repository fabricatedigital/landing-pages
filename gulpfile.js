var gulp = require('gulp');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');

gulp.task('template:fd', function() {
  gulp.src('./fabricatedigital.ejs')
    .pipe(ejs({
        title: 'Fabricate Digital',
        description: 'custom web development',
        ga: 'UA-93839334-1',
        email: 'info@fabricatedigital.com',
        tmpl: 'views/fabricatedigital'
    }, { filename: 'index' }, { ext: '.html' }))
    .pipe(gulp.dest('./fabricatedigital.com'))
});

gulp.task('template:fj', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'FabricateJS',
        description: 'node.js framework',
        ga: 'UA-93839334-3',
        email: 'info@fabricatejs.com',
        tmpl: 'views/default'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./fabricatejs.com'))
});

gulp.task('template:sl', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'Savant LMS',
        description: 'learning management system',
        ga: 'UA-93839334-4',
        email: 'info@savantlms.com',
        tmpl: 'views/default'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./savantlms.com'))
});

gulp.task('template:gl', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'Game Library',
        description: 'curate your game library',
        ga: 'UA-93839334-5',
        email: 'info@gamelibrary.io',
        tmpl: 'views/default'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./gamelibrary.io'))
});

gulp.task('template:cp', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'Command PM',
        description: 'project management from your command line',
        ga: 'UA-93839334-6',
        email: 'info@command.pm',
        tmpl: 'views/default'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./command.pm'))
});

gulp.task('template:fc', function() {
  gulp.src('./index.ejs')
    .pipe(ejs({
        title: 'Fabricate CMS',
        description: 'content management system powered by node.js and mongodb',
        ga: 'UA-93839334-2',
        email: 'info@fabricatecms.com',
        tmpl: 'views/default'
    }, {}, { ext: '.html' }))
    .pipe(gulp.dest('./fabricatecms.com'))
});

gulp.task('sass:fd', function (){
  return gulp.src('./scss/fabricatedigital/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./fabricatedigital.com/css'));
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

gulp.task('sass:cp', function (){
  return gulp.src('./scss/commandpm/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./command.pm/css'));
});

gulp.task('sass:fc', function (){
  return gulp.src('./scss/fabricatecms/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./fabricatecms.com/css'));
});

gulp.task('build', [
  'template:fd',
  'template:fj',
  'template:sl',
  'template:gl',
  'template:cp',
  'template:fc',
  'sass:fd',
  'sass:fj',
  'sass:sl',
  'sass:gl',
  'sass:cp',
  'sass:fc'
]);

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], [
    'sass:fd',
    'sass:fj',
    'sass:sl',
    'sass:gl',
    'sass:cp',
    'sass:fc'
  ]);
  gulp.watch(['./index.ejs'], [
    'template:fd',
    'template:fj',
    'template:sl',
    'template:gl',
    'template:cp',
    'template:fc'
  ]);
});