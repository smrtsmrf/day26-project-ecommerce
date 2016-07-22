// Required
var gulp = require('gulp')
var watch = require('gulp-watch')

var babel = require('gulp-babel')

// Extras
var concat = require('gulp-concat')
// var annotate = require('gulp-ng-annotate')
// var uglify = require('gulp-uglify')
// var to5 = require('gulp-6to5')
// var sass = require('gulp-sass')

// File paths - searches each folder (**) and each file in that folder (*)
var paths = {
	jsSource : ['./public/js/app.js', './public/js/**/*.js'],
	// sassSource : ['./public/styles/**/*.sass', './public/styles/**/*.scss'],
	cssSource : ['./public/styles/**/*.css']
	// sassSource : './public/styles/**/*.{sass,scss,css}'
	// not sure if that works
}

// Tasks
// gulp.task('sass', function () {
// 	return gulp.src(paths.sassSource)
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(concat('styles.css'))
// 	.pipe(gulp.dest('./public/styles'))
// });

gulp.task('css', function () {
	return gulp.src(paths.cssSource)
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./public/dist'))
});

// gulp.task('js', () => {

// })

// gulp.task('js', function () {
// 	return gulp.src(paths.jsSource)
// 	.pipe(babel())
// 	.pipe(concat('bundle.js'))
// 	.pipe(annotate())
// 	// .pipe(uglify)
// 	.pipe(gulp.dest('./public'))
// })


// // 16:50
// gulp.task('es6', function () {
// 	return gulp.src(['./js/app.js', './js/**/*.js'])
// 	.pipe(babel({
// 		"presets" : ["es2015"]
// 	}))
// 	.pipe(concat('all.js'))
// 	.pipe(gulp.dest('dist'))

// })

gulp.task('js', function () {
	return gulp.src(paths.jsSource)
	.pipe(concat('all.js'))
	.pipe(babel({
		"presets" : ["es2015"]
	}))
	.pipe(gulp.dest('./public/dist'))
})

// Watch
gulp.task('watch', function () {
	gulp.watch(paths.jsSource, ['js']);
	// gulp.watch(paths.sassSource, ['sass']);
	gulp.watch(paths.cssSource, ['css']);
})

// Run
// gulp.task('default', ['watch', 'js', 'sass'])
gulp.task('default', ['watch', 'js', 'css'])

// // run npm init -y in project folder (check for package.json to see if it worked)

// // npm instal gulp --save (install gulp locally to project folder)

// // npm install babel-core babel-preset-es2015  gulp-babel --save (locally in project)

// // also need concat locally

// // make .babelrc file in project folder { "presets" : ["es2015"]}

// // add node_modules to .gitignore

// // run gulp from project folder (in terminal)

// // or run gulp js




// Brett's version for DM-12

// const gulp = require('gulp');
// const concat = require('gulp-concat');
// const babel = require('gulp-babel');
// const sass = require('gulp-sass');


// gulp.task('js', () => {
//   gulp.src(['./js/app.js', './js/**/*.js'])
//   .pipe(babel({
//     presets: ['es2015']
//   }))
//   .pipe(concat('bundle.js'))
//   .pipe(gulp.dest('./dist'))
// })

// gulp.task('css', () => {
//   gulp.src('./styles/**/*.{scss,css}')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(concat('bundle.css'))
//   .pipe(gulp.dest('./dist'))
// })

// gulp.task('default', ['js', 'css']);

// gulp.watch(['./js/**/*.js'], ['js'])
// gulp.watch(['./styles/**/*.{css,scss}'], ['css'])