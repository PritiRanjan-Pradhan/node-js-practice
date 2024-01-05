const http = require("http");
const PORT = process.env.PORT || 3000;

// Creating http Server
// var httpServer = http.createServer((request, response) => {
//   // Writing string data
//   response.write("Heyy geeksforgeeks ", "utf8", () => {
//     console.log("Writing string Data...");
//   });

//   // Prints Output on the browser in response
//   response.end(" ok updated");
// });

// // Listening to http Server
// httpServer.listen(PORT, () => {
//   console.log("Server is running at port 3000...");
// });

const fs = require("fs");
const path = require("path");
// fs.writeFileSync("test.txt", "First file by file system");
// fs.writeFileSync("test.txt", "override the previous text");
// fs.appendFileSync("test.txt", "Not override but append the new text");
// fs.unlinkSync("test.txt");

// fs.mkdirSync("asynchronous_programming");
// const path = require("path");
// const currentDirectory = path.join(__dirname, "asynchronous_programming");
// fs.writeFileSync(`${currentDirectory}/index.js`, "");

// fs.mkdirSync("Express Demo");
//var expressDirectory = path.join(__dirname, "Express Demo");

// fs.writeFileSync(`${expressDirectory}/index.js`, "");

//fs.renameSync(expressDirectory, "express_demo");

// fs.mkdirSync("simple_route");
// let currentDirectory = path.join(__dirname, "simple_route");
// fs.writeFileSync(`${currentDirectory}/index.html`, "");
// fs.writeFileSync(`${currentDirectory}/about.html`, "");
// fs.writeFileSync(`${currentDirectory}/contact-us.html`, "");
// fs.writeFileSync(`${currentDirectory}/carrier.html`, "");
const express = require("express");
const app = express();
let dir = path.join(__dirname, "public");
app.use(express.static(dir));

app.listen(PORT);
