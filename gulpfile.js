var gulp = require('gulp'),
    
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),

    //minifyCSS = require('gulp-minify-css'),
    //uglify = require('gulp-uglify'),
    //concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

    connect = require('gulp-connect');

//-------------- compilazione file jade e sass

gulp.task('jade', function() {
  return gulp.src('./src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build/'));
});

 
gulp.task('sass', function () {
  gulp.src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

//-------------- ottimizzazione -----------------

gulp.task('img', function () {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./build/img'));
});

//-------------- gestione server ----------------

gulp.task('webserver', function() {
  connect.server({
    root: 'build',
    port: 8000,
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('./build/*.html')
    .pipe(connect.reload());
});

//-------------------------------------------------


gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.sass', ['sass']);
    gulp.watch('./src/jade/**/*.*', ['jade']);

    gulp.watch('./build/*.html', ['reload']);
    gulp.watch('./build/css/*.css', ['reload']);
    gulp.watch('./build/js/*.js', ['reload']);
});

gulp.task('build', ['jade', 'sass', 'img']);
gulp.task('server', ['webserver', 'watch']);

gulp.task('default', ['build', 'webserver', 'watch']);

