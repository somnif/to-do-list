import { v4 as uuidv4 } from 'uuid'
import FilterButton from './taskFilter';

export default class ProjectItem {
    constructor(project){
        this.name = project.name
        this.id = project.id || uuidv4();
        this.button = new FilterButton(project.name, (task) => task.project === project.name, this)
    }

    exportData() {
        return {"name": this.name,
                "id": this.id }
    }
}