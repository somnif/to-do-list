export default class ItemList {
    constructor(savedData = []) {
        this.taskListArray = savedData
    }

    addTaskToList (newTask) {
        this.taskListArray.push(newTask)
    }

    removeTaskFromList (removedTask) {
        this.taskListArray = this.taskListArray.filter((task) => {
            task.id !== removedTask.id
        })
    }
}