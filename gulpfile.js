var            gulp = require('gulp'),
                run = require('gulp-run'),
             rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('lipsum.js')
        .pipe(run('compiler lipsum.js'))
        .pipe(rename('lipsum.min.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch',function(){
    gulp.watch('lipsum.js',['default']);
});