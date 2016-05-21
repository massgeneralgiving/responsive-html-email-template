// ## Globals
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var inlineCss = require('gulp-inline-css');
var notify = require('gulp-notify');
var runSequence  = require('run-sequence');


//Compiled all in modules
gulp.task('compile', function() {
  return gulp.src(['./Build/*.html'])
    .pipe(concat('compiled.html'))
    .pipe(gulp.dest('./Compiled'))
    .pipe(notify('Compile task completed!'));
});


gulp.task('inline', function() {
    return gulp.src('./Compiled/compiled.html')
        .pipe(inlineCss({
	        	applyStyleTags: true,
	        	applyLinkTags: true,
	        	removeStyleTags: false,
	        	removeLinkTags: false,
	        	preserveMediaQueries: true
        }))
        .pipe(gulp.dest('./Output'))
        .pipe(notify('Inline task completed!'));
});


// Run Build
gulp.task('build', function () {
  runSequence('compile',
              'inline')
   .pipe(notify('Build task completed!'));
});


// Watch
gulp.task('watch', function () {
   gulp.watch(['./Build/*.html'], ['compile'])
   .pipe(notify('Compile task completed from watch!'));
});

