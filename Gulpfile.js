var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');
var autoPrefixer = require('gulp-autoprefixer');
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');


let onError = function(err) {
	gutil.beep()
	gutil.log(gutil.colors.red("ERR ::"), err.toString())
	this.emit("end")
	}
/* paths */
var scssSrc = 'src/scss/**/*.scss';
var cssDistPath = 'dist/css';
var jsSrc = 'src/js/**/*.js';
var jsDistPath = 'dist/js';
var syncPath = '/hendi/_html/view/home.php';

gulp.task('sync', function () {
    browserSync.init({
        port: 500,
        open: 'extrernal',
        host: 'localhost' + syncPath
        //proxy: 'localhost'
    })
    browserSync.reload
});

gulp.task('sass', function () {
    return gulp.src([scssSrc])
        .pipe(plumber({
            handleError: onError
        }))
        .pipe(sass({
            errLogToConsole: true,
            outputStype: "compressed"
        }).on("error", sass.logError))
        .pipe(autoPrefixer({
			browsers: ["> 0%"],
			cascade: false
			}))
        .pipe(concat('main.css'))
         .pipe(gulp.dest(cssDistPath))
         .pipe(cleanCss())
        .pipe(gulp.dest(cssDistPath))
        //.pipe(reload())
        .pipe(notify('CSS Done!'))
});
gulp.task('js', function () {
    gulp.src([jsSrc])
        .pipe(plumber({
            handleError: onError
        }))
        .pipe(concat('main.js'))
        //.pipe(jshint())
        //.pipe(jshint.reporter('default'))
        .pipe(browserify())
        .pipe(gulp.dest(jsDistPath))
        .pipe(uglify())
        .pipe(gulp.dest(jsDistPath))
        //.pipe(reload())
        .pipe(notify('JS Done!'))
});

gulp.task('default', ['js', 'sass']);

gulp.task('watch', function () {
    gulp.watch(jsSrc, ['js']);
    gulp.watch(scssSrc, ['sass']);
});