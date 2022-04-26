const todoList = [];

document.forms["todoForm"].onsubmit = function (event){
    event.preventDefault();

    const todo = document.forms["todoForm"]["todo"].value;
    todoList.push(todo);

    document.forms["todoForm"].reset();
    console.info(todoList);
};