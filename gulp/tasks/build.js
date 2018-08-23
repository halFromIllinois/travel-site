var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browsersync = require('browser-sync').create();

gulp.task('previewBuild', function(){
    browsersync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('cleanBuild', ['icons'], function(){
    return del("./docs");
})

gulp.task('copyGeneralFiles', ['cleanBuild'], function(){
    var copyPaths = [
        './app/**/*',
        '!./app.index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ]

    return gulp.src(copyPaths)
        .pipe(gulp.dest("./docs"))
})

gulp.task('imgOptim', ['cleanBuild'], function(){
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progrssive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['cleanBuild'], function(){
    gulp.start("usemin");
})

gulp.task('usemin', ['styles', 'scripts'], function(){
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function(){return rev()},function(){return cssnano()}],
            js: [function(){return rev()}, function(){return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['cleanBuild', 'copyGeneralFiles', 'imgOptim', 'useminTrigger']);
