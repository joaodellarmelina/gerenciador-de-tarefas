const elementos = {
    input: document.querySelector("#app input"),
    button: document.querySelector("#app button"),
    ul: document.querySelector("#app ul")

};

const tarefas = [];

function mostrarTarefa() {
    elementos.ul.innerHTML = '';

    tarefas.map((todo) => {
        let li = document.createElement('li');

        let p = document.createElement("p");
        p.id = "paragrafo"
        let text = document.createTextNode(todo)

        let button = document.createElement("a");
        button.appendChild(document.createTextNode('X'));
        button.onclick = deletarTarefa;
        button.classList.add("excluir")


        elementos.ul.appendChild(li)

        p.appendChild(text);
        li.appendChild(p);
        li.appendChild(button)

        function checkTarefas() {
            if (tarefas.indexOf(todo) != -1) {
                return true;

            } else {
                return false;
            };
        };
        function deletarTarefa() {
            if (checkTarefas) {
                tarefas.splice(tarefas.indexOf(todo), 1)
                mostrarTarefa();

            };
        };



    });
};



function adionarTarefas() {
    if (elementos.input.value === '') {
        alert("Escreva uma tarefa");
        return false;
    } else {
        let novatarefa = elementos.input.value;
        tarefas.push(novatarefa);
        elementos.input.value = '';
        mostrarTarefa()
    }
};

elementos.button.onclick = adionarTarefas;
