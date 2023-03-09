const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list')




todoForm.addEventListener(`submit`, addTodo);
function addTodo(event){
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if(todoText === ''){
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;
    todolist.appendChild(todoItem);
    todoInput.value = '';

}
