require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// slash is important in routing

app.get("/twitter", (req, res) => {
  res.send("lakshya_2601");
});

// have to restart server at every code updation
app.get("/login", (req, res) => {
  res.send("<h1>Lakshya Porwal Backend learning project</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Here is the new URL</h2>");
});

app.get("/newPort", (req, res) => {
  res.send("<h3>Lakshya's new port here</h3>");
});

app.get("/newport2", (req, res) => {
  res.send("hello new port");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
