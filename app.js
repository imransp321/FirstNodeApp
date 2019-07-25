var express = require("express");
var path = require("path");
var tasksRouter = require("./router/tasks");

var app = express();

app.set("view engine", "ejs");

app.use("/tasks", tasksRouter);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
