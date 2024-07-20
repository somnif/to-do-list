import ItemList from "./itemList"
import TaskItem from "./taskItem"
//add localStorage import here

const trialTasks = {"taskList": [new TaskItem("Task One", "Food is Great!", "Hahaha", "task-critical"),
new TaskItem("Task Two", "Complete the project report", "2022-11-15", "task-high"),
new TaskItem("Task Three", "Attend the team meeting", "2022-11-20", "task-medium"),
new TaskItem("Task Four", "Submit the assignment", "2022-12-01", "task-critical"),
new TaskItem("Task Five", "Plan the holiday trip", "2022-12-10", "task-low"),
new TaskItem("Task Six", "Review the codebase", "2022-12-10", "task-high"),

], "projectList": ["Team Projects", "Personal Projects"]
}

export const Projects = new ItemList(trialTasks.projectList)
export const Tasks = new ItemList(trialTasks.taskList)