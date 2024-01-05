const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("huuureee, Home Page");
});

app.get("/about", (req, res) => {
  res.send("huuureee, About Page");
});
const http = require("http");

var port = process.env.PORT || 3000;
app.listen(port);
