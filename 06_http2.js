import http from "http";
import { Url } from "url";

const server = http.createServer((req, res) => {
  //1.  to send text responce
  // res.write("hello how are you");

  //2. to send html responce
  //   res.setHeader("Content-Type", "text/html"); // setheader always should be on top
  //   res.write("<h1>Hello world</h1>");
  //   res.write("<p>Hello world</p>");

  // 3. conditional responce (mutipage)
  const url = req.url;
  res.setHeader("Content-Type", "text/html"); // setheader always should be on top
  switch (url) {
    case "/":
      res.write("<h1>Hello world</h1>");
      res.write("<p>Hello world</p>");
      break;

    case "/a":
      //  res.setHeader("Content-Type", "text/html"); // ^ setheader always should be on top
      res.write("<h1>Hello world A</h1>");
      res.write("<p>Hello world A</p>");
      break;

    case "/b":
      // res.setHeader("Content-Type", "text/html"); // ^ setheader always should be on top
      res.write("<h1>Hello world B</h1>");
      res.write("<p>Hello world B</p>");
      break;

    default:
      res.write("<h1>404 not found</h1>");
      res.write("<p>404 not found</p>");
      break;
  }

  //2. to send html responce

  res.end();
});

server.listen(4343, () => {
  console.log("server running on port 4343");
});
