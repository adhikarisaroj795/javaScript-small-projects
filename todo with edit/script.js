// const taskList = document.getElementById('task-list');
// const taskInput = document.getElementById('tsk-input');
// const taskText = taskInput.value;

// function addTask(){
//     const taskText = taskInput.value;
//     if(taskText === '')
//     {
//         alert('please enter the task');
//         return;
//     }
// }

// const li = document.createElement('li');
// li.innerHTML = taskText;
// //creating new element in li and taking element from tasktext 


// const editButton = document.createElement('button');//creates new button element and stores in editbutton variable

// editButton.innerText = 'Edit';
// editButton.onclick = () =>//setting event listner on the button
//  {
//     const newTaskText = prompt('Enter new task text', taskText);
//     if(newTaskText !== null && newTaskText !==''){
//         li.innerText = newTaskText;
//     }
// };

// const deleteButton = document.createElement('button');
// deleteButton.innerText = 'Delete';
// deleteButton.onclick = () => {//setting event listner for delete button
//     li.remove();
// };

// li.appendChild(editButton);
// li.appendChild(deleteButton);
// taskList.appendChild(li);

// taskInput.value = '';


const form = document.querySelector('form');
const input = document.getElementById('tsk-input');
const ul = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = input.value.trim();
    if(taskText !== ''){
        addTask(taskText);
        input.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    const textNode = document.createElement('span');
    textNode.innerText = task;
    li.appendChild(textNode);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => {
      const newText = prompt('Enter new task text:');
      if (newText !== null && newText.trim() !== '') {
        textNode.innerText = newText;
      }
    });
    li.appendChild(editButton);
    ul.appendChild(li);
  }
  

