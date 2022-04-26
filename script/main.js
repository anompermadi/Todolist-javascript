const todoList = ["learn javascript", "learn node js"];

function clearTodolist(){
    const todolistBody = document.getElementById("todolistBody");
    while(todolistBody.firstChild){
        todolistBody.removeChild(todolistBody.firstChild);
    }
}

function removeTodoList(index){
    todoList.splice(index, 1);
    displayTodolist();
}

function addTodolist(index, todo){

    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function (){
        removeTodoList(index);
    };
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todolistBody = document.getElementById("todolistBody");
    todolistBody.appendChild(tr);
}

function displayTodolist(){
    
    clearTodolist()

    for (let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        
        const searchText = document.getElementById("search").value.toLowerCase();

        if(todo.toLowerCase().includes(searchText)){
            addTodolist(i, todo);
        }
        
    }
}

document.forms["todoForm"].onsubmit = function (event){
    event.preventDefault();

    const todo = document.forms["todoForm"]["todo"].value;
    todoList.push(todo);

    document.forms["todoForm"].reset();
    console.info(todoList);
    displayTodolist();
};

const searchInput = document.getElementById("search");

searchInput.onkeyup = function (){
    displayTodolist();
}
searchInput.onkeydown = function (){
    displayTodolist();
}

displayTodolist();