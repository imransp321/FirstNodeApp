var express = require("express");
var router = express.Router();

let tasks = require("../data/tasks");
var data = {
  title: "Tasks List",
  taskItems: tasks
};

router.get("/list", function(req, res) {
  res.render("tasks/list", data);
});

router.get("/add", function(req, res) {
  res.render("tasks/add", data);
});

router.get("/", function(req, res) {
  res.redirect("tasks/list", data);
});

router.get("/details/:id", function(req, res) {
  const id = Number(req.params.id);
  let task = null;

  for (var i = 0; i < tasks.length; i++) {
    if (id === tasks[i].id) {
      task = tasks[i];
      break;
    }
  }
  res.render("tasks/details", {
    title: "Task List",
    taskItems: task
  });
});

module.exports = router;
