var express = require("express");
var app = express();

const PORT = 3000;
let tasks = ["Learn React", "Learn NodeJS", "Learn Express"];

app.get("/", function(req, res) {
  res.send("Hello-p!");
});

app.get("/tasks", function(req, res) {
  res.json(tasks);
});

app.listen(PORT, function() {
  console.log("Listening to port " + PORT);
});
