import DOMController from "./DOMController";
import { Tasks } from "./fileLoader";
import { isWithinInterval, add, format, differenceInDays } from "date-fns";

const sortByDays = (taskOne, taskTwo) => differenceInDays(taskOne.dueDate, Date.now()) - differenceInDays(taskTwo.dueDate, Date.now())

export default class FilterButton {
    constructor(name, filter, project) {
        this.name = name;
        this.filter = filter;
        this.project = project || null
        this.createButton()
    }

    createButton(){
        DOMController.addFilterButton(this.name, () => Tasks.itemList.filter(this.filter).sort(sortByDays), this.project)
    }
}

const defaultFilterButtons = new Array()

defaultFilterButtons.push(new FilterButton("Current Day", (task) => task.dueDate === format(Date.now(), "yyyy-MM-dd")))
defaultFilterButtons.push(new FilterButton("Week Ahead", task => isWithinInterval(task.dueDate, { start: Date.now(), end: add(Date.now(), {days: 7})})));
defaultFilterButtons.push(new FilterButton("All Pending Tasks", task => !task.completed))
defaultFilterButtons.push(new FilterButton("All Completed Tasks", task => task.completed))