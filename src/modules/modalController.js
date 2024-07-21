import createNewElement from "./createElement";
import { Tasks } from "./fileLoader"
import { refresh } from "./DOMController";
import { format } from "date-fns"

function modalControl(existingTask) {
    const dialog = document.getElementById("modal-box");

    const formOuter = createNewElement("form", { "method": "dialog" })
    const legend = createNewElement("legend", {}, existingTask ? `Edit your task: "${existingTask.title}"` : "Create your new Task")

    const titleLabel = createNewElement("label", { "for": "title" }, "Task Name:")
    const dueDateLabel = createNewElement("label", { "for": "dueDate" }, "Date Due:")
    const priorityLabel = createNewElement("label", { "for": "priority" }, "Task Priority:")
    const descriptionLabel = createNewElement("label", { "for": "description" }, "Task Description:")
    const titleField = createNewElement("input", { "name": "title", })
    const dueDateField = createNewElement("input", { "type": "date", "name": "dueDate", "required": "required", "value": format(Date.now(), "yyyy-MM-dd") })
    const descriptionField = createNewElement("input", { "type": "field" })
    const priorityField = createNewElement("select", { "name": "priority" })
    const lowPriority = createNewElement("option", { "value": "task-low" }, "Low")
    const mediumPriority = createNewElement("option", { "value": "task-medium" }, "Medium")
    const highPriority = createNewElement("option", { "value": "task-high" }, "High")
    const criticalPriority = createNewElement("option", { "value": "task-critical" }, "Critical")
    const cancelButton = createNewElement("button", { "class": "submit-button" }, "Cancel", closeModal)
    const submitButton = createNewElement("button", { "class": "cancel-button" }, existingTask ? "Save Changes" : "Save New Task", addNewItem)

    if (existingTask) {
        titleField.value = existingTask.title;
        dueDateField.value = existingTask.dueDate;
        descriptionField.value = existingTask.description
        Array(lowPriority, mediumPriority, highPriority, criticalPriority).forEach((option) => {
            if (option.value === existingTask.priority) {
                option.setAttribute("selected", "selected")
            }
        })
    }

    priorityField.appendChild(lowPriority)
    priorityField.appendChild(mediumPriority)
    priorityField.appendChild(highPriority)
    priorityField.appendChild(criticalPriority)


    formOuter.appendChild(legend)
    formOuter.appendChild(titleLabel)
    formOuter.appendChild(titleField)
    formOuter.appendChild(dueDateLabel)
    formOuter.appendChild(dueDateField)
    formOuter.appendChild(priorityLabel)
    formOuter.appendChild(priorityField)
    formOuter.appendChild(descriptionLabel)
    formOuter.appendChild(descriptionField)
    formOuter.appendChild(submitButton)
    formOuter.appendChild(cancelButton)

    dialog.appendChild(formOuter)


    dialog.showModal()

    function closeModal() {
        dialog.innerHTML = "";
        dialog.close()
    }

    function addNewItem() {
        if (!dueDateField.value) {
            dueDateField.classList.add("required")
            dueDateField.setAttribute("placeholder", "A task name is required.")
            dueDateField.addEventListener("focus", () => {
                dueDateField.classList.remove("required")
            }, { "once": true })
        }

        if (!titleField.value) {
            titleField.classList.add("required")
            titleField.setAttribute("placeholder", "A task name is required.")
            titleField.addEventListener("focus", () => {
                titleField.classList.remove("required")
            }, { "once": true })
        } else {
            const taskInfo = {
                "title": titleField.value,
                "dueDate": dueDateField.value,
                "description": descriptionField.value,
                "priority": priorityField.value
            }
            existingTask ? existingTask.editTask(taskInfo) : Tasks.addItem(taskInfo)
            closeModal();
            refresh();
        }

    }


}

export default modalControl