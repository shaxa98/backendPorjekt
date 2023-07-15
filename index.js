const express = require("express");
const app = express();

app.set("veaw engine", "ejs");

app.get("/", (req, res) => {
  res.status(500).json({ message: "Error" });
  res.render("index");
});

app.listen(3000);
