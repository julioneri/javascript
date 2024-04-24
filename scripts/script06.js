/*
# Sistema de Gestão de Produtos em uma Loja

Sistema de gestão de produtos de uma loja em JavaScript.

Cada produto terá as seguintes propriedades:
1. Nome
2. Preço
3. Quantidade em estoque

O programa é capaz de realizar as seguintes operações:
1. Adicionar um novo produto ao sistema.
2. Listar todos os produtos cadastrados.
3. Buscar um produto pelo nome.
4. Atualizar a quantidade em estoque de um produto.
5. Calcular o valor total em estoque (soma do preço de todos os produtos multiplicado pela quantidade em estoque).

// Feito por Júlio Néri
// Siga-me => github.com/julioneri
*/

let listaProdutos = []


// Adicionando um novo Produto à Lista de Produtos
function adicionarProduto(nome, preco, quantidade) {
    let produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }
    listaProdutos.push(produto)
    console.log('Produto registrado com sucesso!')
}


// Listando todos os produtos presentes na Lista de Produtos
function listarProdutos() {
    console.log('=== LISTA DE PRODUTOS ===')
    for (let indiceProduto in listaProdutos) {
        console.log(`Código: ${indiceProduto} - Produto: ${listaProdutos[indiceProduto].nome} - Vl Unit: ${listaProdutos[indiceProduto].preco} - Qtde: ${listaProdutos[indiceProduto].quantidade}`)
    }
}


// Buscando os produtos por nome
function buscarProduto(nome) {
    console.log('== BUSCANDO PRODUTO... ==')
    for (let indiceProduto in listaProdutos) {
        if (listaProdutos[indiceProduto].nome.toLowerCase() ==  nome.toLowerCase()) {
            console.log(`Código: ${indiceProduto} - Produto: ${listaProdutos[indiceProduto].nome} - Vl Unit: ${listaProdutos[indiceProduto].preco} - Qtde: ${listaProdutos[indiceProduto].quantidade}`)
            return 1
        }
    }
    console.log(`Desculpe, mas o produto "${nome}" não foi encontrado.`)
}


// Atualizando quantidade de unidades para cada produto
function atualizarQuantidade(indiceProduto, newQuantidade) {
    console.log('== ATUALIZANDO QTDE... ==')
    if (newQuantidade >= 0 && indiceProduto < listaProdutos.length) {
        listaProdutos[indiceProduto].quantidade = newQuantidade
        console.log(`O produto "${listaProdutos[indiceProduto].nome}" passou a ter ${listaProdutos[indiceProduto].quantidade} unidade(s) em estoque.`)
    } else {
        if (newQuantidade < 0) {
            console.log('A quantidade mínima que pode ser incrementada a um produto precisa ser maior ou igual a 0 (zero). ')
        } else {
            console.log('O índice fornecido é inválido. Por favor, tente novamente com um valor válido.')
        }
    }
}


// Calculando o valor total de produtos em estoque
function valorEstoque() {
    console.log('== CALCULANDO TOTAL... ==')
    let valorTotal = 0
    for (let indiceProduto in listaProdutos) {
        itemTotal = listaProdutos[indiceProduto].preco * listaProdutos[indiceProduto].quantidade
        console.log(`Produto: ${listaProdutos[indiceProduto].nome} - Vl Unit: ${listaProdutos[indiceProduto].preco} Qtde: ${listaProdutos[indiceProduto].quantidade} - Total: ${itemTotal}`)
        valorTotal += itemTotal
    }
    console.log(`O valor total em produtos é igual a ${valorTotal}`)
}


adicionarProduto('Sopa', 4.50, 3)
adicionarProduto('Macarrão', 3.90, 5)
adicionarProduto('Arroz', 5.99, 1)

atualizarQuantidade(1, 9)
listarProdutos()

valorEstoque()

// buscarProduto('arroz')