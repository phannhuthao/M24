"use strict";
var _a;
const todolist = [
    {
        id: 1,
        title: "Leo Núi",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Đua Xe",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Học Bài",
        isCompleted: true,
    },
];
function displayInitialTodos() {
    const todoList = document.querySelector('#todoList ul');
    todolist.forEach(function (item) {
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTodoItem.innerText = item.title;
        if (item.isCompleted) {
            newTodoItem.classList.add('completed');
            const checkIcon = document.createElement('i');
            checkIcon.className = 'bi bi-check-circle-fill';
            newTodoItem.appendChild(checkIcon);
        }
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger float-end';
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', function () {
            newTodoItem.remove();
        });
        newTodoItem.appendChild(deleteButton);
        newTodoItem.addEventListener('click', function () {
            this.classList.toggle('completed');
        });
        todoList.appendChild(newTodoItem);
    });
}
displayInitialTodos();
(_a = document.getElementById('addTodoBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoList = document.querySelector('#todoList ul');
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTodoItem.innerText = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger float-end';
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', function () {
            newTodoItem.remove();
        });
        newTodoItem.appendChild(deleteButton);
        newTodoItem.addEventListener('click', function () {
            this.classList.toggle('completed');
        });
        todoList.appendChild(newTodoItem);
        todoInput.value = '';
    }
});
function filterTodos(status) {
    const todoItems = document.querySelectorAll('.list-group-item');
    todoItems.forEach(function (item) {
        if (status === 'all') {
            item.style.display = 'block';
        }
        else if (status === 'active') {
            if (!item.classList.contains('completed')) {
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';
            }
        }
        else if (status === 'completed') {
            if (item.classList.contains('completed')) {
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';
            }
        }
    });
}
