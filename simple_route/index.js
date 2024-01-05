const express = require("express");
const app = express();
const path = require("path");
let dir = path.join(__dirname, "simple_route");
app.use(express.static(dir));

const port = process.env.PORT || 3000;
app.listen(port);
