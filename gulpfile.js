import gulpBrotli from 'gulp-brotli'
import gulp from 'gulp'
import zlib from 'zlib'
 
export function compressBrotli() {
  return gulp
    .src(`source/`)
    .pipe(gulpBrotli({
      // the options are documented at https://nodejs.org/docs/latest-v10.x/api/zlib.html#zlib_class_brotlioptions 
      params: {
        // brotli parameters are documented at https://nodejs.org/docs/latest-v10.x/api/zlib.html#zlib_brotli_constants
        [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
      },
    }))
    .pipe(gulp.dest(`output/`))
}