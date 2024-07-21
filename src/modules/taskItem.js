import { v4 as uuidv4 } from 'uuid'

export default class TaskItem {
    constructor(task) {
        this.title = task.title;
        this.description = task.description;
        this.dueDate = task.dueDate;
        this.priority = task.priority;
        this.id = task.id || uuidv4();
        this.completed = task.completed || false;
        this.inProject = task.inProject || ""
    }

    addToProject(project) {
        this.inProject = project.id
    }

    toggleCompleted() {
        this.completed = !this.completed;
        console.log(`${this.title} completed? ${this.completed}`)
    }

    editTask (task) {
        console.log("check")
        this.title = task.title;
        this.description = task.description;
        this.dueDate = task.dueDate;
        this.priority = task.priority;
    }

    
}