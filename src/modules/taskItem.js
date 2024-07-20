const uuidv4 = require("uuid/v4")

class TaskItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = uuidv4();
    }

    addToProject(project) {
        this.isProjectIn = project.name
    }
}