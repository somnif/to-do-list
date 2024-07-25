import { Tasks, Projects } from "./fileLoader";
import createNewElement from "./createElement"
import modalControl from "./modalController"

const DOMController = function () {
    
    //New element creation using Vanilla Javascript module - following format ("element", {Obj of Attributes}, "InnerText", () => Callback for click listener)
    const displayContainer = document.querySelector(".container")
    const filterButtonList = document.querySelector("#filter-list")
    const projectButtonList = document.querySelector("#project-list")

    const createTaskItem = (taskItem) => {
        const taskOuter = createNewElement("article", {"class": `task-outer ${taskItem.priority}`}, "", () => {
            if ([...taskDescription.classList].includes("hidden")) {
                taskDescription.classList.remove("hidden")
            } else {
                taskDescription.classList.add("hidden")
            }
        })

        const taskDescription = createNewElement("div", {"class": "task-description hidden"}, taskItem.description)
        const taskTitle = createNewElement("div", {"class": "task-title"}, taskItem.title)
        const dueDate = createNewElement("div", {"class": "due-date"}, `Due: ${taskItem.dueDate}`)
        const editTask = createNewElement("div", {"class": "edit-button"},"", modalControl, taskItem)
        const taskPriority = createNewElement("div", {"class": `priority-box ${taskItem.priority}`})
        const deleteTask = createNewElement("div", {"class": "delete-button"}, "", () => {
            Tasks.removeItem(taskItem)
            refresh()
        })

        const taskCompleted = createNewElement("div", {"class": `completed-box ${taskItem.completed ? "task-complete" : "task-not-complete"}` },"", () => {
            taskItem.toggleCompleted();
            Tasks.writeData()
            refresh()

        })

        taskOuter.appendChild(taskCompleted)
        taskOuter.appendChild(taskTitle)
        taskOuter.appendChild(dueDate)
        taskOuter.appendChild(editTask)
        taskOuter.appendChild(taskPriority)
        taskOuter.appendChild(deleteTask)
        taskOuter.appendChild(taskDescription)

        return taskOuter;
    }

    const createTaskDisplay = (array) => {
        displayContainer.innerHTML = "";
        const addNewItem = createNewElement("div", {"class": ["add-task"]}, "Add New Item", modalControl)
        array.forEach((taskItem) => {
            const taskOuter = createTaskItem(taskItem)
            displayContainer.appendChild(taskOuter)
        })
        
        displayContainer.appendChild(addNewItem)
    }
    
    const addFilterButton = function (innerText, callback, project) {
        const newButton = createNewElement("li", {}, innerText, function () {
            document.querySelectorAll("li").forEach(button => button.classList.remove("active"))
            newButton.classList.add("active")
            createTaskDisplay(callback())
        })

        if (project) {
            const deleteButton = createNewElement("div", {"class": "delete-project"}, "X", () => {
                Projects.removeItem(project)  
                projectButtonList.removeChild(newButton)
            })
            newButton.appendChild(deleteButton)
            projectButtonList.appendChild(newButton)

        } else {
            filterButtonList.appendChild(newButton)

        }
    }

    return { createTaskDisplay, addFilterButton } 

}();

export const refresh = () => {
    const buttons = document.querySelectorAll("li");
    buttons.forEach( button => {
        if ([...button.classList].includes("active")) {
            button.click()
        }
    })
}

export default DOMController    