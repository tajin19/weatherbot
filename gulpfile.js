var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var babel = require("gulp-babel");
var webpack = require('webpack-stream');


gulp.task('server', function () {
  nodemon({
    script: 'app.js',
    watch: ["app.js", 'webpack.config.js', 'app/', 'config/'],
    ext: 'js',
    tasks: ['pack']
    // Below i'm using es6 arrow functions but you can remove the arrow and have it a normal .on('restart', function() { // then place your stuff in here }
  }).on('restart', () => {
    console.log('Restarting');
  });
})

gulp.task('pack', function(){

  console.log('Beginning webpack!');

  return gulp.src('app/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    //.pipe(babel())
    .pipe(gulp.dest('public/'));

});



gulp.task('default', ['pack', 'server'], function(){

  console.log('Starting app.js with gulp...');
});