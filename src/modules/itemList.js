import { handleWriteData } from "./fileLoader"

export default class ItemList {
    constructor(name, savedData = []) {
        this.name = name
        this.itemList = savedData
    }

    addItem (newItem) {
        this.itemList.push(newItem)
        this.writeData()
    }

    removeItem (removedItem) {
        this.itemList = this.itemList.filter(item => item.id !== removedItem.id)
        this.writeData()
    }

    writeData () {
        const dataString = JSON.stringify(this.itemList.map(item => item.exportData()))
        handleWriteData(this.name, dataString)
    }
}

