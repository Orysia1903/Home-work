var btnCreateItem = document.querySelector('[value="Create list item"]'),
    btnCancel = document.querySelector('[value="Cancel"]'),
    btnAddItem = document.querySelector('[value="Add list item"]'),
    messageForm = document.querySelector('#message-form')
    myList = document.querySelector('#my-list'),
    actionToDo = ''; 
    var elementToEdit;


btnCreateItem.onclick = toggleMesaageWindow;
btnCancel.onclick = toggleMesaageWindow;
btnAddItem.onclick = addItem;

function toggleMesaageWindow() {
    messageForm.classList.toggle('message-form-visible');
    btnCreateItem.classList.toggle('changeButton');
    if(actionToDo === 'edit'){
        btnCreateItem.value = 'Edit item'
        btnCreateItem.classList.add('edit-item')
    }else{
        btnCreateItem.value = 'Create list item'
    }
}
function addItem() {
    var textarea = document.querySelector('textarea');
    
    if (actionToDo === 'edit') {
        elementToEdit.children[0].innerHTML = textarea.value;
        actionToDo = ''
    } else {
        var item = `<li class="list">
                        <span>${textarea.value}</span>
                        <input type="button"; class="change-item"; onclick="editItem(this)">
                        <input type="button"; value="&#10006"; class="delete-item"; onclick="deleteItem(this)";>
                    </li>`;
        myList.insertAdjacentHTML('beforeend', item);
    }
    toggleMesaageWindow();
    textarea.value = '';
}

function deleteItem(deleteBtn) {
    myList.removeChild(deleteBtn.parentNode)
}
function editItem(editBtn){
    actionToDo = 'edit';
    elementToEdit = editBtn.parentNode
    toggleMesaageWindow();
    document.querySelector('textarea').value = elementToEdit.innerText.trim();
};
