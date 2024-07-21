import { currentDay, weekAhead, seeAllTasks, returnCompleted, returnProjects } from "./taskFilter"
import { Tasks } from "./fileLoader";
import createNewElement from "./createElement"
import modalControl from "./modalController"

const DOMController = function () {
    const displayContainer = document.querySelector(".container")

    const createTaskItem = (taskItem) => {
        const taskOuter = createNewElement("article", {"class": `task-outer ${taskItem.priority}`}, "", () => {
            if ([...taskDescription.classList].includes("hidden")) {
                taskDescription.classList.remove("hidden")
            } else {
                taskDescription.classList.add("hidden")
            }
        })

        const taskCompleted = createNewElement("input", {"class": "completed-checkbox"},"", taskItem.changeCompleted)
        taskCompleted.setAttribute("type", "checkbox")
        const taskDescription = createNewElement("div", {"class": "task-description hidden"}, taskItem.description)

        const taskTitle = createNewElement("div", {"class": "task-title"}, taskItem.title)

        const dueDate = createNewElement("div", {"class": "due-date"}, `Due: ${taskItem.dueDate}`)
        const taskPriority = createNewElement("div", {"class": `priority-box ${taskItem.priority}`})
        const deleteTask = createNewElement("div", {"class": "delete-button"}, "", () => {
            //need to add confirmation box
            displayContainer.removeChild(taskOuter)
            Tasks.removeItem(taskItem)
        })

        const editTask = createNewElement("div", {"class": "edit-button"},"", modalControl, taskItem)

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


    return { createTaskDisplay, createNewElement }

}();

const buttonListeners = function () {
    const changeActiveClass = (target) => {
        const allButtons = document.querySelectorAll("li")
        allButtons.forEach((button) => button.classList.remove("active"))
        target.classList.add("active")
    }

    const addClickHandler = function (selector, callback) {
        const targetElement = document.querySelector(selector)
        targetElement.addEventListener("click", () => {
            changeActiveClass(targetElement);
            DOMController.createTaskDisplay(callback())
        })
    }

    addClickHandler("#all-tasks", seeAllTasks)
    addClickHandler("#the-week", weekAhead)
    addClickHandler("#my-day", currentDay)
    addClickHandler("#show-completed", returnCompleted)

    return { addClickHandler }
}();


export default DOMController