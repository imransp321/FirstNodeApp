var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var tasksRouter = require("./router/tasks");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/tasks", tasksRouter);
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
