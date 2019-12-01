import http2 from "http2";
// import fs from "fs";

// const http2 = require("http2");
const test = () => {
  const server = http2.createServer();
  server.on("stream", (stream, headers) => {
    stream.respond({
      "content-type": "text/html",
      ":status": 200
    });
    stream.end("<h1>Hello World</h1>");
  });

  server.listen(1337);
};

test();
