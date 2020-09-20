let submit = document.getElementById("submitButton");
let clear = document.getElementById("clearButton");
let markAll = document.getElementById("markAllButton");
let del = document.getElementById("deleteButton");

submit.addEventListener("click", submitTodo);
clear.addEventListener("click", clearTodo);
markAll.addEventListener("click", markAllTodo);
del.addEventListener("click", deleteTodo);

function submitTodo(event) {
    event.preventDefault();
    let newTodo  = document.getElementById("newTodo").value;
    let list = document.getElementById("listOfTodos");

    let currentList = list.innerHTML;
    list.innerHTML  = currentList  + `<div name="wrapper"> <input name="todo" type="checkbox"/>${newTodo} </div>`
}

function clearTodo(event) {
    event.preventDefault();
    let todos = document.getElementsByName("todo");
    todos.forEach(todo => {
        todo.checked = false;
    });
}

function markAllTodo(event) {
    event.preventDefault();
    let todos = document.getElementsByName("todo");
    todos.forEach(todo => {
        todo.checked = true;
    });
}

function deleteTodo(event) {
    event.preventDefault();
    var wrappers = document.getElementsByName("wrapper");
    var l = wrappers.length;
    for (var i = 0; i < l; i++) {
        wrappers[0].remove();
    }
} 