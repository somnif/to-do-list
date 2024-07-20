import './styles/style.css'
import { Tasks } from './modules/fileLoader'
import DOMController from './modules/DOMController'

DOMController.createTaskDisplay(Tasks.itemList)
