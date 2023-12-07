const http = require("http");
const path = require("path");
const fs = require("fs");

console.log(__dirname);
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  var pagedata = undefined;

  switch (url) {
    // access html files in http module 
    case "/":
      pagedata = fs.readFileSync(
        path.join(__dirname, "assets/01.html"),
        "utf-8"
      );
      break;
    case "/about":
      pagedata = fs.readFileSync(
        path.join(__dirname, "assets/02.html"),
        "utf-8"
      );
      break;

    default:
      break;
  }
  res.write(pagedata);
  res.end();
});

server.listen(4545, () => {
  console.log("server running on 4545");
});
