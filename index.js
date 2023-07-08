const express = require("express");
const app = express();

app.set("veaw engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello shaxzod1");
});

app.listen(3000);
