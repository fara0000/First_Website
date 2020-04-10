const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

function returnHTML() {
    return src('./**/*.html')
    .pipe(dest('build'))
}
    
function returnJS() {
    return src('./src/index.js')
    .pipe(dest('build/js'))
}
function returnCSS() {
    return src('./less/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/'))
}

function returnBootstrapCSS() {
    return src('./css/img/**')
    .pipe(dest('build/css/'))
}


function returnImages() {
    return src('./src/img/**')
    .pipe(dest('build/images'))
}

exports.returnHTML = returnHTML;
exports.returnCSS = returnCSS;
exports.returnJS = returnJS;
exports.returnBootstrapCSS = returnBootstrapCSS;
exports.returnImages = returnImages;
exports.default = parallel(returnHTML, returnCSS, returnBootstrapCSS, returnJS, returnImages);

