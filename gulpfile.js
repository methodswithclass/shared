




var gulp = require('gulp');
var webpack = require('gulp-webpack');
var babel = require('gulp-babel');
var del = require("del");

gulp.task('default', ["clean"], function() {
  return gulp.src('shared.js')
  	.pipe(babel())
    .pipe(webpack({
    	output: {
	    	filename: 'shared.js',
	    }
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task("clean", function () {

	del("dist");
})