var gulp = require('gulp');
var gUtil = require('gulp-util');

gulp.task('test:ci', ['lint'], function (done) {
  var karma = require('karma').server;
  karma.start({
    configFile: localRequire('workflow/karma/karma.conf.js')
  }, done);
});

gulp.task('test:server', ['lint'], function() {
  var karma = require('karma').server;
  karma.start({
    configFile: localRequire('workflow/karma/karma.conf.js'),
    browsers: ['Chrome'],
    reporters: ['progress'],
    autoWatch: true,
    singleRun: false
  }, function(code) {
    gUtil.log('Karma has exited with ' + code);
    process.exit(code);
  });
});