var gulp = require('gulp'),
  exec = require('child_process').exec;

gulp.task('build', gulp.series(compile, move));

function compile(done) {
  exec('tsc -p ./api', function (err, stdOut, stdErr) {
    console.log(stdOut);
    if (err){
      done(err);
    } else {
      done();
    }
  });
};

function move() {
  return gulp.src(['./api/env/**', "./api/node_modules/**"], {
    base: "./api/"
  })
    .pipe(gulp.dest('./api/dist/'));
};