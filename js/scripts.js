// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções 

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //previne de mandar para o backend, pois não está contemplado por este projeto.

    const inputValue = todoInput.value
    if(inputValue) {
        console.log(inputValue)
        // save to-do
    }
});