import TaskItem from "./taskItem"
import ProjectItem from "./projectItem"
import ItemList from "./itemList"
import { trialTasks, trialProjects } from "./defaultData";


const fetchedTasks = localStorage.getItem("taskList") || trialTasks;
const fetchedProjects = localStorage.getItem("projectList") || trialProjects

const taskList = JSON.parse(fetchedTasks).map(task => new TaskItem(task))
const projectList = JSON.parse(fetchedProjects).map(project => new ProjectItem(project))

export const Projects = new ItemList("projectList", projectList)
export const Tasks = new ItemList("taskList", taskList)

export const handleWriteData = (item, savedData) => {
    localStorage.setItem(item, savedData)
}
