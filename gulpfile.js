var gulp = require('gulp'),
    server = require('gulp-express');

gulp.task('serve', function () {
    return server.run({
        file: 'app.js'
    });
});

gulp.task('default', ['serve']);
