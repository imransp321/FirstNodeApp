var express = require("express");

var app = express();

let tasks = require("./data/tasks");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/tasks", function(req, res) {
  res.json(tasks);
});

module.exports = app;
