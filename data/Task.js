class Task {
  constructor(id, title, description, resourceURL, completed, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.resourceURL = resourceURL;
    this.completed = completed;
    this.date = date;
  }
}

module.exports = Task;
