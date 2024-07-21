import ItemList from "./itemList"
import TaskItem from "./taskItem"
//add localStorage import here

const trialTasks = {"taskList": [new TaskItem({"title": "Task One", "description": "Food is Great!", "dueDate": "2022-11-15", "priority": "task-critical"}),
new TaskItem({"title": "Task Two", "description": "Complete the project report", "dueDate": "2022-11-15", "priority": "task-high"}),
new TaskItem({"title": "Task Three", "description": "Attend the team meeting", "dueDate": "2022-11-20", "priority": "task-medium"}),
new TaskItem({"title": "Task Three", "description": "Attend the team meeting", "dueDate": "2022-11-20", "priority": "task-medium"}),
new TaskItem({"title": "Task Three", "description": "Attend the team meeting", "dueDate": "2022-11-20", "priority": "task-medium"}),
new TaskItem({"title": "Task Three", "description": "Attend the team meeting", "dueDate": "2022-11-20", "priority": "task-medium"}),

], "projectList": ["Team Projects", "Personal Projects"]
}

export const Projects = new ItemList(trialTasks.projectList)
export const Tasks = new ItemList(trialTasks.taskList)