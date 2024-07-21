const createNewElement = (element, attributeList, textContent, listenerCallback, callbackProp = null) => {
    const newElement = document.createElement(element)

    if (attributeList) {
        const keys = Object.keys(attributeList)
        keys.forEach((key) => {
            newElement.setAttribute(key, attributeList[key])
        })
    }

    if (textContent) {
        newElement.innerText = textContent;
    }

    if (listenerCallback) {
        newElement.addEventListener("click", function (e) {
            e.stopPropagation()
            e.preventDefault()
            listenerCallback(callbackProp)})
    }

    return newElement;
}

export default createNewElement;