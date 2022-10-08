//Adding New Task from Input box with Add Button
document.addEventListener('DOMContentLoaded', getTasks)
let form = document.querySelector('#input_form');
let newTask = document.getElementById('new_task');
let taskList = document.querySelector('ul');

form.addEventListener('submit', addTask);

function addTask(e) {
    if (newTask.value === '') {
        alert('Add a task!');
    } else {
        let newLi = document.createElement('li');
        newLi.innerText = `${newTask.value} `;
        newLi.setAttribute('id', 'task');
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = ('x');
        newLi.appendChild(link);
        taskList.appendChild(newLi);

        //saves in local storage
        storeLocal(newTask.value);

        //reset value in input box
        newTask.value = '';

    }

    e.preventDefault();
}

//Deleting Single Element

taskList.addEventListener('click', removeTask);

function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        let erasedTask = e.target.parentElement;
        erasedTask.remove();
    }

}

//Clear All
let clearBtn = document.querySelector('#clear_btn')
clearBtn.addEventListener('click', clearTask);

function clearTask(e) {
    // if (confirm("Are you sure?")) {
    //     taskList.innerHTML = "";
    // }
    taskList.innerHTML = '';
    //clear from local storage
    localStorage.clear();
}

// Store in local storage
function storeLocal(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Get from Local Storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let newLi = document.createElement('li');
        newLi.innerText = `${task} `;
        newLi.setAttribute('id', 'task');
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = ('x');
        newLi.appendChild(link);
        taskList.appendChild(newLi);
        
    });
}

// Filter Task
let filter = document.querySelector('#task_filter');
filter.addEventListener('keyup', filterTask)

function filterTask(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}
