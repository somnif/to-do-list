import { v4 as uuidv4 } from 'uuid'

export default class TaskItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = uuidv4();
        this.completed = false;
    }

    addToProject(project) {
        this.isProjectIn = project.id
    }

    changeCompleted() {
        this.completed = !this.completed
        console.log(`${this.title} completed? ${this.completed}`)
    }

    
}