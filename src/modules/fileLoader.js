import TaskItem from "./taskItem"
import ProjectItem from "./projectItem"
import ItemList from "./itemList"

const fetchedTasks = localStorage.getItem("taskList")
const fetchedProjects = localStorage.getItem("projectList")

const taskList = fetchedTasks ? JSON.parse(fetchedTasks).map(task => new TaskItem(task)) : []
const projectList = fetchedProjects ? JSON.parse(fetchedProjects).map(project => new ProjectItem(project)) : []

export const Projects = new ItemList("projectList", projectList)
export const Tasks = new ItemList("taskList", taskList)

export const handleWriteData = (item, savedData) => {
    localStorage.setItem(item, savedData)
}
