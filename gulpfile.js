var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('photos', function() {
    return gulp.src('project/imgs/*.*')
    .pipe(gulp.dest('dist/images'))
})
gulp.task('js',function() {
    return gulp.src('project/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
gulp.task('css', function() {
    return gulp.src('project/scss/*.*')
    .pipe(gulp.dest('dist/css'))
})
gulp.task('html', function() {
    return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
})