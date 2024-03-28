/*
# Sistema de Catálogo de Livros

Programa em JavaScript que representa um catálogo de livros.

Cada livro tem as seguintes propriedades:
1. Título
2. Autor
3. Gênero
4. Ano de publicação

O programa é capaz de realizar as seguintes operações:
1. Adicionar um novo livro ao catálogo.
2. Listar todos os livros do catálogo.
3. Buscar um livro pelo título.

// Feito por Júlio Néri
// Siga-me => github.com/julioneri
*/

let catalogoLivros = []

// Função apra adicionar livros ao catálogo
function newLivro(titulo, autor, genero, anoPub) {
    let livro = {
        titulo: titulo,
        autor: autor,
        genero: genero,
        ano: anoPub
    }
    catalogoLivros.push(livro)
    console.log('Livro adicionado com sucesso!')
}

// Função para listar todos os livros do catálogo
function listarLivros() {
    for (let livro in catalogoLivros) {
        buscarLivro(catalogoLivros[livro].titulo)
    }
}

// Função para exibir livro por busca de título
function buscarLivro(titulo) {
    for (let ind in catalogoLivros) {
        if ((catalogoLivros[ind].titulo).toLowerCase() == titulo.toLowerCase()) {
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log(`Título do livro: ${catalogoLivros[ind].titulo}`)
            console.log(`Autor deste livro: ${catalogoLivros[ind].autor}`)
            console.log(`Gênero: ${catalogoLivros[ind].genero}`)
            console.log(`Ano de publicação: ${catalogoLivros[ind].ano}`)
            return 1
        }
    }
    console.log('Livro não encontrado! :/')
}

newLivro('Desencantado', 'Alexandre', 'Fantasia', 2019)
newLivro('Desprogramado', 'Alexandre', 'Ficção científica', 2021)
newLivro('Acampamento Coelho', 'Alexandre', 'Aventura', 2020)

listarLivros()
// buscarLivro('DesprogramadO')