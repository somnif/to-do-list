import createNewElement from "./createElement";
import TaskItem from "./taskItem";
import ProjectItem from "./projectItem";
import { Tasks, Projects } from "./fileLoader"
import { refresh } from "./DOMController";
import { format } from "date-fns"

function modalControl(existingTask) {
    //Creating all required form elements
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
    const priorityOptions = ["low", "medium", "high", "critical"]
    priorityOptions.forEach((option) => {
        const innerText = option.charAt(0).toUpperCase() + option.slice(1)
        const newOption = createNewElement("option", {"value": `task-${option}`}, innerText)
        priorityField.appendChild(newOption)
    })   
    const projectLabel = createNewElement("label", { "for": "project" }, "Project:")
    const projectFieldWrapper = createNewElement("div")
    const projectField = createNewElement("select", { "name": "project" })
    const projectDefault = createNewElement("option", { "value": "" }, "-Select a Project-")
    const cancelButton = createNewElement("button", { "class": "submit-button" }, "Cancel", closeModal)
    const submitButton = createNewElement("button", { "class": "cancel-button" }, existingTask ? "Save Changes" : "Save New Task", addNewItem)

    projectField.appendChild(projectDefault)
    Projects.itemList.forEach((item) => {
        const projectOption = createNewElement("option", { "value": item.name }, item.name)
        projectField.appendChild(projectOption)
    })

    const newProject = createNewElement("option", { "value": "new-project" }, "New Project...")
    projectField.appendChild(newProject)

    const newProjectField = createNewElement("input", { "name": "project" })
    projectField.addEventListener("change", () => {
        if (projectField.value === "new-project") {
            projectFieldWrapper.innerHTML = ""
            projectFieldWrapper.appendChild(newProjectField)
            newProjectField.focus();
        }
    })

    projectFieldWrapper.appendChild(projectField)
    

    //Populate the input fields if there is an existing task being edited
    if (existingTask) {
        titleField.value = existingTask.title;
        dueDateField.value = existingTask.dueDate;
        descriptionField.value = existingTask.description
        const priorityNodes = priorityField.childNodes

        priorityField.childNodes.forEach((node) => {
            if (node.value === existingTask.priority) {
                node.setAttribute("selected", "selected")
            }
        })
        projectField.childNodes.forEach((node) => {
            if (node.value === existingTask.project) {
                node.setAttribute("selected", "selected")
            }
        })
    }

    formOuter.appendChild(legend)
    formOuter.appendChild(titleLabel)
    formOuter.appendChild(titleField)
    formOuter.appendChild(dueDateLabel)
    formOuter.appendChild(dueDateField)
    formOuter.appendChild(priorityLabel)
    formOuter.appendChild(priorityField)
    formOuter.appendChild(descriptionLabel)
    formOuter.appendChild(descriptionField)
    formOuter.appendChild(projectLabel)
    formOuter.appendChild(projectFieldWrapper)
    formOuter.appendChild(submitButton)
    formOuter.appendChild(cancelButton)

    dialog.appendChild(formOuter)

    dialog.showModal()

    function closeModal() {
        dialog.innerHTML = "";
        dialog.close()
    }

    function addNewItem() {

        //Javascript Validation to check if Date and Title are empty.
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
                "priority": priorityField.value,
                "project": newProjectField.value || projectField.value
            }
            if (newProjectField.value) {
                Projects.addItem(new ProjectItem({"name": newProjectField.value}))
            }
            existingTask ? existingTask.editTask(taskInfo) : Tasks.addItem(new TaskItem(taskInfo))
            Tasks.writeData()
            closeModal();
            refresh();
        }
    }
}

export default modalControl