export default class ItemList {
    constructor(savedData = []) {
        this.itemList = savedData
    }

    addItem (newItem) {
        this.itemList.push(newItem)
    }

    removeItem (removedItem) {
        this.itemList = this.itemList.filter(item => item.id !== removedItem.id)
    }
}

