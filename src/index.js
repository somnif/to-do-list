import './styles/style.css'
import { Tasks } from './modules/fileLoader'
import DOMController from './modules/DOMController'

DOMController.createTaskDisplay(Tasks.itemList)


//functionality to add a project
//filter by project
//filter by date
//add correct date object
//include local storage