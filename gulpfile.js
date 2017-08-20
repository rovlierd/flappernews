var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('lint', function () {
    gulp.src('./**/*.js')
        .pipe(jshint())
});

gulp.task('default', ['browser-sync'], function() {});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files:  ['app.js', 'public/javascripts/*.js'],
        port: 3000,
    });
});

gulp.task('nodemon', function(cb) {
    return nodemon({
        script: 'app.js',
        env: {
            'NODE_ENV': 'development'
        }
    }).on('start', function() {
        cb();
    }).on('restart');
});



gulp.task('uglify',function(){
    gulp.src('flappernews/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('flappernews/minified'));
});
 
