const http = require("http");
const fs = require("fs");
const port = 9094;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (!err) {
        res.write(data);
      } else {
        res.write("Something went wrong...");
      }
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./about.html", "utf-8", (err, data) => {
      if (!err) {
        res.write(data);
      } else {
        res.write("Something went wrong...");
      }
      res.end();
    });
  } else if (req.url == "/services") {
    fs.readFile("./services.html", "utf-8", (err, data) => {
      if (!err) {
        res.write(data);
      } else {
        res.write("Something went wrong...");
      }
      res.end();
    });
  } else if (req.url == "/contact") {
    fs.readFile("./contact.html", "utf-8", (err, data) => {
      if (!err) {
        res.write(data);
      } else {
        res.write("Something went wrong...");
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });

    res.write(`
        <h1>404 - Page Not Found</h1>
        <a href="/">Go To Home</a>
    `);

    res.end();
  }


})

server.listen(port, (err) => {
  if (!err) {
    console.log("Server is running...");
    console.log(`http://localhost:${port}`);
  }
})