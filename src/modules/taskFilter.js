import DOMController from "./DOMController";

export default class FilterButton {
    constructor(name, filter, project) {
        this.name = name;
        this.filter = filter;
        this.project = project || null
        this.createButton()
    }

    createButton(){
        DOMController.addFilterButton(this.name, this.filter, this.project)
    }
}
