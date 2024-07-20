import { returnMyDay, weekAhead, seeAllTasks, returnCompleted, returnProjects } from "./taskFilter"
import { Tasks } from "./fileLoader";

const DOMController = function () {

    const allTasks = document.querySelector("#all-tasks");
    allTasks.addEventListener("click", () => seeAllTasks())

    const displayContainer = document.querySelector(".container")

    const createNewElement = (element, addClassArray, textContent, listenerCallback) => {
        const newElement = document.createElement(element)

        if (addClassArray) {
            newElement.classList.add(...addClassArray)
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

        array.itemList.forEach((taskItem) => {
            const taskOuter = createTaskItem(taskItem)
            displayContainer.appendChild(taskOuter)
        })
    }

    const createTaskItem = (taskItem, parentArray) => {
        const taskOuter = createNewElement("article", ["task-outer", taskItem.priority])

        const taskCompleted = createNewElement("input")
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

        return taskOuter
    }

    return { createTaskDisplay, createTaskItem }

}();


export default DOMController