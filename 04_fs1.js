import fs from "fs";

// 1. Append
// append data to a file, creating the file if it does not yet exist.
fs.appendFileSync("./text.js", ";console.log('hello')");

//2. COPY
fs.copyFileSync("./text.js", "hello.js");
//  copy data to a new file, if not exists than create a new file by second argument

//  3. ExistsSync
console.log(fs.existsSync("text.js")); // true

// 4. mkdir(path, mode, callback)
// makes a new Folder
fs.mkdirSync("./hi", "0777", (err) => console.log(err));
// Error: EEXIST: file already exists, mkdir './hi'
