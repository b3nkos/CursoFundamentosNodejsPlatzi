const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
  console.log('building site');
  cb();
});

gulp.task('serve', function(cb) {
  gulp.src('www')
  .pipe(server({
    livereload: true,
    open: true
  }));
});

gulp.task('default', gulp.series('build', 'serve'));