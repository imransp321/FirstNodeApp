var express = require("express");
var router = express.Router();
var taskController = require("../controller/taskController");

//get list
router.get("/list", taskController.getTaskList);
//add task
router.get("/add", taskController.addTask);
//add task - post
router.post("/add", taskController.addFormTask);
//get task details
router.get("/details/:id", taskController.getTaskDetails);
//delete task
router.get("/delete/:id", taskController.deleteTask);

module.exports = router;
