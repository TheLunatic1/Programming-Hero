const loadtodo=()=>{
    const url=`https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        displayTodos(data);
    })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

const displayTodos = (todos) => {
    // console.log(todos);
    // step 1
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";
    // step 2
    todos.forEach(todo => {
        // console.log(todo);

        const todoCard = document.createElement("div");
        
        todoCard.innerHTML = `
        <div class="todo-card">
            <p>${todo.userId} </p>
            <p>${todo.id} </p>
            <p>${todo.title} </p>
            <p>Status: ${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}   </p>
        </div>
        `;
        
        todoContainer.appendChild(todoCard);
    });
}

loadtodo();