//module.exports = ["Learn React", "Learn NodeJS", "Learn JavaScript"];
const Task = require("./Task");

module.exports = [
  new Task(
    1,
    "Learn React",
    "This is for learning React",
    "https://cdn.auth0.com/blog/react-js/react.png",
    false,
    new Date()
  ),
  new Task(
    2,
    "Learn NodeJS",
    "This is for learning NodeJS",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    false,
    new Date()
  ),
  new Task(
    3,
    "Learn JavaScript",
    "This is for learning JavaScript",
    "https://cms-assets.tutsplus.com/uploads/users/71/courses/1261/preview_image/practice-javascript-and-learn-functions-400x277.png",
    false,
    new Date()
  )
];
