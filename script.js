const elementos = {
    input: document.querySelector("#app input"),
    button: document.querySelector("#app button"),
    ul: document.querySelector("#app ul")

};

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}


function adionarTarefas() {
    if (elementos.input.value === '') {
        alert("Escreva uma tarefa");
        return false;
    } else {
        let novatarefa = elementos.input.value;
        tarefas.push(novatarefa);
        elementos.input.value = '';
        mostrarTarefa()
        salvarDados()
    }
};

elementos.button.onclick = adionarTarefas;

function mostrarTarefa() {
    elementos.ul.innerHTML = '';

    tarefas.map((todo) => {
        let li = document.createElement('li');

        let p = document.createElement("p");
        p.id = "paragrafo"
        let text = document.createTextNode(todo)

        let a = document.createElement("a");
        a.appendChild(document.createTextNode('X'));
        a.setAttribute("href", "#");
        a.onclick = deletarTarefa;
        a.classList.add("excluir")

        elementos.ul.appendChild(li)

        p.appendChild(text);
        li.appendChild(p);
        li.appendChild(a)

        function deletarTarefa() {
            tarefas.splice(tarefas.indexOf(todo), 1)
            mostrarTarefa();
            salvarDados()
        };
    });
};
mostrarTarefa()

