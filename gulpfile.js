// ## Globals
var gulp = require('gulp');
var concat = require('gulp-concat');
var inlineCss = require('gulp-inline-css');
var runSequence  = require('run-sequence');


//Compiled all in modules
gulp.task('compile', function() {
  return gulp.src(['./Build/*.html'])
    .pipe(concat('compiled.html'))
    .pipe(gulp.dest('./Compiled'));
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
        .pipe(gulp.dest('./Output'));
});

// Run Build
gulp.task('build', function (callback) {
  runSequence('compile',
              'inline',
              callback);
});

// Watch
gulp.task('watch', function () {
   gulp.watch(['./Build/*.html'], ['compile']);
});

