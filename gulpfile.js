const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function() {
    return gulp.src('styles/custom.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});