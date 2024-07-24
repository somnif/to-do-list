import './styles/style.css'
import { Tasks } from './modules/fileLoader'
import DOMController from './modules/DOMController'
import FilterButton from './modules/taskFilter'

DOMController.createTaskDisplay(Tasks.itemList)


//functionality to add a project
//filter by project
//filter by date
//add correct date object
//include local storage

const filterButtons = new Array()

filterButtons.push(new FilterButton("Current Day", () => Tasks.itemList.filter((task) => task.dueDate === "2022-11-20")))
filterButtons.push(new FilterButton("Week Ahead", () => Tasks.itemList.filter((task) => task.dueDate === "2022-11-20")))
filterButtons.push(new FilterButton("See All Tasks", () => Tasks.itemList.filter((task) => !task.completed)))
filterButtons.push(new FilterButton("See All Tasks", () => Tasks.itemList.filter((task) => task.completed)))

filterButtons.push(new FilterButton("Project A", () => Tasks.itemList.filter((task) => task.inProject === "Project A"), "Project A"))
