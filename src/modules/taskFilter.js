import { Projects, Tasks } from "./fileLoader";
import DOMController from "./DOMController";

function currentDay() {
    console.log("current Day")
    return Tasks.itemList.filter((item) => item.dueDate === "2022-12-10")
}

function weekAhead() {
    console.log("current week")

}

function seeAllTasks() {
    console.log("show All Tasks")
    return Tasks.itemList
}

function returnCompleted() {
    console.log("compeleted tasks")
    return Tasks.itemList.filter((item) => item.completed === true)


}

function returnProjects (projectId) {

}

export { currentDay, weekAhead, seeAllTasks, returnCompleted, returnProjects}