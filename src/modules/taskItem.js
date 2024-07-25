import { v4 as uuidv4 } from 'uuid'

export default class TaskItem {
    constructor(task) {
        this.title = task.title;
        this.description = task.description;
        this.dueDate = task.dueDate;
        this.priority = task.priority;
        this.id = task.id || uuidv4();
        this.completed = task.completed || false;
        this.project = task.project || ""
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    editTask (task) {
        this.title = task.title;
        this.description = task.description;
        this.dueDate = task.dueDate;
        this.priority = task.priority;
        this.project = task.project;
    }
    
    exportData() {
         return {"title": this.title, 
                 "description": this.description, 
                 "dueDate": this.dueDate, 
                 "priority": this.priority, 
                 "id": this.id,
                 "completed": this.completed,
                 "project": this.project}
    }
}