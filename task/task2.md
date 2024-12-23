// import modules
//https (s is for extra security)

const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { rawListener } = require("process");
require("dotenv").config();

//Create Server
const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    res.writeHead(200);
    res.end("Home page");
  } else if ((req, url === "/contact")) {
    res.writeHead(200);
    res.end("Contact page");
  } else if ((req, url === "/service")) {
    res.writeHead(200);
    res.end("Service page");
  } else if ((req, url === "/signup")) {
    res.writeHead(200);
    res.end("Signup page");
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
});

//Server listening

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is running on${port} `);
})