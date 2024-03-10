const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.lista-task')


let minhaListaDeLivros = []


function adicionarNovoLivro() {
    minhaListaDeLivros.push({
        livro: input.value,
        concluido: false,
    })

    input.value = ''

    mostrarLivros()
}

function mostrarLivros() {
    let novaLi = ''

    minhaListaDeLivros.forEach((item, i) => {
        novaLi =
            novaLi +
            `
       <li class="task ${item.concluido && 'done'}">
        <img src="img/checked.png" alt="livro-adicionado" onclick="concluirLeitura(${i})">
        <p>${item.livro}</p>
        <img src="img/trash.png" alt="excluir-livro" onclick="deletarLivro(${i})">
    </li>`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeLivros))
}

function concluirLeitura(i) {
    minhaListaDeLivros[i].concluido = !minhaListaDeLivros[i].concluido
    mostrarLivros()

}

function deletarLivro(i) {
    minhaListaDeLivros.splice(i, 1)

    mostrarLivros()
}

function recarregarLivros() {
    const livrosDoLocalStorage = localStorage.getItem('listaDeLivros');

    if (livrosDoLocalStorage) {
        minhaListaDeLivros = JSON.parse(livrosDoLocalStorage)
    }

    mostrarLivros()
}

recarregarLivros()

button.addEventListener('click', adicionarNovoLivro)