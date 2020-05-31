const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

function returnHTML() {
    return src('./src/**/*.html')
    .pipe(dest('build'))
}
    
function returnJS() {
    return src('./src/js/**')
    .pipe(dest('build/js'))
}

function returnCSS() {
    return src('./src/less/**')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/css/'))
}

function returnBootstrapCSS() {
    return src('./src/css/**')
    .pipe(dest('build/css/'))
}

function returnImages() {
    return src('./src/img/**')
    .pipe(dest('build/img'))
}

function returnFonts() {
    return src('./src/fonts/**')
    .pipe(dest('build/fonts'))
}

exports.returnHTML = returnHTML;
exports.returnCSS = returnCSS;
exports.returnJS = returnJS;
exports.returnBootstrapCSS = returnBootstrapCSS;
exports.returnImages = returnImages;
exports.returnFonts = returnFonts;
exports.default = parallel(returnHTML, returnCSS, returnBootstrapCSS, returnJS, returnImages, returnFonts);

