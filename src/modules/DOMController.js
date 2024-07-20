import { currentDay, weekAhead, seeAllTasks, returnCompleted, returnProjects } from "./taskFilter"
import { Tasks } from "./fileLoader";

const DOMController = function () {
    const displayContainer = document.querySelector(".container")

    const createNewElement = (element, classArray, textContent, listenerCallback) => {
        const newElement = document.createElement(element)

        if (classArray) {
            newElement.classList.add(...classArray)
        }

        if (textContent) {
            newElement.innerText = textContent;
        }

        if (listenerCallback) {
            newElement.addEventListener("click", listenerCallback)
        }

        return newElement;
    }

    const createTaskDisplay = (array) => {
        displayContainer.innerHTML = "";

        array.forEach((taskItem) => {
            const taskOuter = createTaskItem(taskItem)
            displayContainer.appendChild(taskOuter)
        })
    }

    const createTaskItem = (taskItem) => {
        const taskOuter = createNewElement("article", ["task-outer", taskItem.priority])

        const taskCompleted = createNewElement("input", "completed-checkbox")
        taskCompleted.setAttribute("type", "checkbox")

        const taskTitle = createNewElement("div", ["task-title"], taskItem.title)

        const dueDate = createNewElement("div", "due-date", `Due: ${taskItem.dueDate}`)

        const taskPriority = createNewElement("div", ["priority-box", taskItem.priority])
        const deleteTask = createNewElement("div", ["delete-button"], "", () => {
            //need to add confirmation box
            displayContainer.removeChild(taskOuter)
            Tasks.removeItem(taskItem.id)
        })

        taskOuter.appendChild(taskCompleted)
        taskOuter.appendChild(taskTitle)
        taskOuter.appendChild(dueDate)
        taskOuter.appendChild(taskPriority)
        taskOuter.appendChild(deleteTask)

        return taskOuter;
    }

    return { createTaskDisplay }

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