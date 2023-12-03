import path, { dirname, basename, extname } from "path";


console.log(path)
/*{
  resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: bound _format],
  parse: [Function: parse],
  sep: '\\',
  delimiter: ';',
  win32: [Circular *1],
  posix: <ref *2> {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    sep: '/',
    delimiter: ':',
    win32: [Circular *1],
    posix: [Circular *2],
    _makeLong: [Function: toNamespacedPath]
  },
  _makeLong: [Function: toNamespacedPath]
}*/

var filepath = "D:/abc/ksks/lkiki/songs.mp3";

// dirname ==> to check directory or folder path
console.log(dirname(filepath)); // D:/abc/ksks/lkiki

// basename ==> for file name
console.log(basename(filepath)); //  songs.mp3
console.log(basename(filepath, ".mp3")); //  songs

// extname == > to get extension of file
console.log(extname(filepath)); // .mp3
