let tasks = require("../data/tasks");
const Task = require("../data/Task");

//get task list
exports.getTaskList = function(req, res) {
  res.render("tasks/list", {
    title: "Task List",
    taskItems: tasks
  });
};

//add task
exports.addTask = function(req, res) {
  res.render("tasks/add", {
    title: "Tasks List"
  });
};

//add task
exports.addFormTask = function(req, res) {
  const data = req.body;

  const newtask = new Task(
    tasks.length + 1,
    data.title,
    data.description,
    data.resourceURL
  );

  tasks.push(newtask);

  res.redirect("/tasks/list");
};

//get task details
exports.getTaskDetails = function(req, res) {
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
};

//delete tasks
exports.deleteTask = function(req, res) {
  const id = Number(req.params.id);

  tasks.forEach(function(task, i) {
    if (id === task.id) {
      tasks.splice(i, 1);
      res.redirect("/tasks/list");
    }
  });
};
