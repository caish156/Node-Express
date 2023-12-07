// create a http server

import http from "http";

// create server object
const server = http.createServer((req, res) => {
  res.write("Hello world"); // to define the responce
  res.end(); // to send the responce
});

// server start
server.listen(5656, () => console.log("running on 5656"));
