// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções 
const saveTodo = (text) => {
    // cria div
    const todo = document.createElement("div");
    todo.classList.add("todo");

    // cria h3
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    // cria botões: feito, editar e deletar
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    // coloca o To-Do list na lista geral:
    todoList.appendChild(todo);

    // limpa o valor depois de digitar:
    todoInput.value = "";
    // vai para o início da caixa de formulário
    todoInput.focus();

}

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //previne de mandar para o backend, pois não está contemplado por este projeto.

    const inputValue = todoInput.value
    if(inputValue) {
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div"); // seleciona o elemento-pai (div) mais próximo, no caso o 'todo done'

    //tudo que é criado no evento é aplicado ao evento-pai (parentEl)
    
    // ação de clicar para finalizar/adicionar tarefa
    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done"); // adiciona a classe 'done' aos to-dos onde se clicou para salvar a tarefa, e ao invés de .add, usa-se .toggle para que se possa voltar atrás na seleção.
    };

    // ação de clicar para excluir tarefa
    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove(); 
    };

    // ação de editar tarefa
    if(targetEl.classList.contains("edit-todo")) {
        console.log("Editou");
    };
});