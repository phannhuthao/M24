// Khai báo mảng todolist
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
    var todoList = document.querySelector('#todoList ul');
    todolist.forEach(function (item) {
        var newTodoItem = document.createElement('li');
        newTodoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTodoItem.innerText = item.title;
        if (item.isCompleted) {
            newTodoItem.classList.add('completed');
            var checkIcon = document.createElement('i');
            checkIcon.className = 'bi bi-check-circle-fill';
            newTodoItem.appendChild(checkIcon);
        }
        var deleteButton = document.createElement('button');
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




document.getElementById('addTodoBtn').addEventListener('click', function () {
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();
    if (todoText !== '') {
        var todoList = document.querySelector('#todoList ul');
        var newTodoItem = document.createElement('li');
        newTodoItem.className = 'list-group-item';
        newTodoItem.innerText = todoText;
        var deleteButton = document.createElement('button');
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
    var todoItems = document.querySelectorAll('.list-group-item');
    todoItems.forEach(function (item) {
        if (status === 'all') {
            item.style.display = 'block';
        } else if (status === 'active') {
            if (!item.classList.contains('completed')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        } else if (status === 'completed') {
            if (item.classList.contains('completed')) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}