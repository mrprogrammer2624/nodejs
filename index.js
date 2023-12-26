require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/youtube", (req, res) => {
  res.send("hi trupsh");
});

app.get("/login", (req, res) => {
  res.send("hi trupsh Savaliya");
});

app.listen(process.env.Port, () => {
  console.log(`Example app listening on port ${process.env.Port}`);
});
