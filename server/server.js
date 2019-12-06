require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const { PORT: port } = process.env;

app.use(express.static(path.join(__dirname, "../build")));

app.listen(port, () => console.log(`Listening on port ${port}`));
