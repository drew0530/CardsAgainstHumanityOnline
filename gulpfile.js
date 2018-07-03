var gulp = require('gulp')
  , sass = require('gulp-sass')
  , wait = require('gulp-wait');

gulp.task('sass', function(){
  gulp.src('./public/scss/style.scss')
    .pipe(wait(1000))
    .pipe(sass())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function(){
  gulp.watch('./public/scss/*.scss', ['sass']);
})
 