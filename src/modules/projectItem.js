import { v4 as uuidv4 } from 'uuid'

export default class ProjectItem {
    constructor(name){
        this.name = name
        this.id = uuidv4();
    }
}