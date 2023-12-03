import { dirname, basename, extname } from "path";

var filepath = "D:/abc/ksks/lkiki/songs.mp3";

// dirname ==> to check directory or folder path
console.log(dirname(filepath)); // D:/abc/ksks/lkiki

// basename ==> for file name
console.log(basename(filepath)); //  songs.mp3
console.log(basename(filepath, ".mp3")); //  songs

// extname == > to get extension of file
console.log(extname(filepath)); // .mp3
