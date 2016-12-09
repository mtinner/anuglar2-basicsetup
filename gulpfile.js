var gulp = require('gulp'),
    config = require('load-gulp-config'),
    runSequence = require('run-sequence');


// Specifics of npm's package.json handling.
// @see https://docs.npmjs.com/files/package.json
var pack = config.util.readJSON('package.json');

config(gulp, {
    // path to task's files, defaults to gulp dir.
    configPath: config.util.path.join('gulp', '*.js'),
    // data passed into config task.
    data: Object.assign(
        {
            path: {
                frontend: './src/frontend/',
                backend: './src/backend/',
                prod: './.prod/',
                tmpE2e: './src/.tmpE2e/',
                tmpProd: './src/.tmpProd/',
                aot: './src/.aot/',
                e2e: './src/e2e/',
                spec: './src/spec/',
                dist: './src/.dist/'
            },
            anyValue: 1,
            anyParams: []
        },
        pack
    )
});

gulp.task('Default', function(callback) {
    runSequence(
        'build',
        'serve:Dist',
        ['watch:All'],
        callback
    );
});

gulp.task('Prod', function(callback) {
    runSequence(
        ['clean:Prod'],
        ['sass:Prod', 'copy:tmpProd'],
        ['transpiling:Prod'],
        ['copy:ProdMain'],
        ['transpiling:Prod'],
        ['copy:Prod', 'rollup:Prod'],
        'serve:Prod',
        callback
    );
});

gulp.task('UnitTest', function(callback) {
    runSequence(
        'build',
        'karma:Frontend',
        callback
    );
});

gulp.task('E2e', function(callback) {
    runSequence(
        'clean:E2e',
        ['transpiling:E2e', 'sass:E2e'],
        ['copy:E2eApp'],
        'serve:E2e',
        'angularProtractor',
        callback
    );
});

gulp.task('build', function(callback) {
    runSequence(
        'lint:Es',
        'lint:Ts',
        'clean:Dist',
        ['transpiling:Dist', 'sass:Dist'],
        ['copy:App'],
        callback
    );
});
