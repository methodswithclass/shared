




var gulp = require('gulp');
var webpack = require('gulp-webpack');
var babel = require('gulp-babel');
var del = require("del");



var build = function () {

	return gulp.src('shared.js')
  	.pipe(babel())
    .pipe(webpack({
    	output: {
	    	filename: 'shared.js',
	    }
    }))
    .pipe(gulp.dest('./dist'));
}


var clean = function () {

	return del("dist");
}

gulp.task('default', gulp.series(clean, build));