"use strict";
var gulp=require("gulp");
var less=require("gulp-less");
var cssnano=require("gulp-cssnano");
var browserSync=require("browser-sync").create();
gulp.task("copy",function(){
	//console.log("hello world");
	gulp.src("src/index.html")
	   .pipe(gulp.dest("dist/"));
});
gulp.task("dist",function(){
	//console.log("hello world");
	// gulp.src("src/index.html")
	//    .pipe(gulp.dest("dist/"));

	// gulp.watch("src/index.html",['copy']);
	gulp.watch("src/styles/*.less",['style']);
});
gulp.task("style",function(){
	gulp.src("src/styles/*.less")
	   .pipe(less())
	   .pipe(cssnano())
	   .pipe(gulp.dest("dist/css/"));
});
gulp.task("serve",function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
});