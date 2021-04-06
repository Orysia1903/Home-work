const methodsClass = 'methods' // declare variable with useful value to avoid duplication

function chooseFirstItem() {
    cleanLastChosenClass()
    var firstItem = document.getElementById(methodsClass).firstChild

    if (firstItem) {
        setLastChosenClasses(firstItem)
    } else {
        console.log('There is no any item!')
    }
}

function chooseLastItem() {
    cleanLastChosenClass()
    var lastItem = document.getElementById(methodsClass).lastChild

    if (lastItem) {
        setLastChosenClasses(lastItem)
    } else {
        console.log('There is no any item!')
    }
}

function chooseNextItem() {
    cleanAllChosenClasses()

    let lastChosen = getLastChosenElement();

    cleanLastChosenClass();

    if (lastChosen) {
        let nextElementSibling = lastChosen.nextElementSibling;

        if (nextElementSibling) {
            setLastChosenClasses(nextElementSibling)
        } else {
            chooseFirstItem()
        }
    } else {
        chooseFirstItem()
    }

}

function choosePreviousItem() {
    cleanAllChosenClasses()

    let lastChosen = getLastChosenElement();

    cleanLastChosenClass();

    if (lastChosen) {
        let nextElementSibling = lastChosen.previousElementSibling;

        if (nextElementSibling) {
            setLastChosenClasses(nextElementSibling)
        } else {
            chooseLastItem()
        }
    } else {
        chooseLastItem()
    }

}

function appendItem(form) {
    let value = form.inputText.value;
    if (form.inputText.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = value;
        document.getElementById(methodsClass).appendChild(newItem);
    }
}

function deleteItem() {
    var restoreItems = document.getElementById('methods')
    if (restoreItems.childNodes.length > 0) {
        var oneChild = restoreItems.lastChild
        restoreItems.removeChild(oneChild)
    } else { console.log('empty') }
}

function prependItem(form) {
    let value = form.inputText.value;
    if (value) {
        var newItem = document.createElement("li"); // declare new first item
        newItem.innerHTML = form.inputText.value; // init value for new first item

        let allItems = document.getElementById(methodsClass).firstChild;
        var parent = allItems.parentNode // get all items from element by id
        parent.insertBefore(newItem, allItems);
     }
}

function cleanAllChosenClasses() {
    let allItems = document.getElementById(methodsClass);

    if (allItems) {
        for (var item of allItems.children) {
            item.classList.remove('chosen')
        }
    }
}

function cleanLastChosenClass() {
    let allItems = document.getElementById(methodsClass)

    if (allItems) {
        for (var item of allItems.children) {
            item.classList.remove('last_chosen')
        }
    }
}

function setLastChosenClasses(element) {
    if (element) {
        element.classList.add('chosen')
        element.classList.add('last_chosen')
    } else {
        console.log('Invalid element!')
    }
}

function getLastChosenElement() {

    let elementsByClassName = document.getElementsByClassName('last_chosen');

    var lastElement

    if (elementsByClassName && elementsByClassName.length > 0) {
        lastElement = elementsByClassName[0]
    }
    return lastElement;
}

