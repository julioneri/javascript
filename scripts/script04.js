// github.com/julioneri

let carrinhoCompras = []

// Adicionar um novo item à lista de compras
function novoItem(nome, preco, quantidade) {
    let item = {
        nomeProduto: nome,
        precoProduto: preco,
        quantidade: quantidade
    }
    carrinhoCompras.push(item)
    console.log(`Novo item adicionado ao carrinho!`)
}

// Remover um item da lista de compras
function removerItem(idItem) {
    if (procurarItem(idItem) != -1) {
        console.log(`O item ${carrinhoCompras[idItem].nomeProduto} foi removido com sucesso!`)
        carrinhoCompras.splice(idItem, 1)
    }
}

// Buscar por um item no carrinho
function procurarItem(idItem) {
    if (idItem < 0 || idItem >= carrinhoCompras.length) {
        console.log('Item não encontrado!')
        return -1
    }
    return 1
}

// Visualizar a lista de compras
function verCarrinho() {
    for (let id in carrinhoCompras) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log(`ID: ${id}`)
        console.log(`Produto: ${carrinhoCompras[id].nomeProduto}`)
        console.log(`Preço unitário: R$${(carrinhoCompras[id].precoProduto).toFixed(2)}`)
        console.log(`Quantidade: ${carrinhoCompras[id].quantidade}`)
    }
}

// Atualizar a quantidade de unidades de um item
function atualizarQtt(idItem, novaQtt) {
    if (procurarItem(idItem) != -1) {
        if (novaQtt != 0) {
            console.log(`${carrinhoCompras[idItem].nomeProduto} passou a ter ${novaQtt} unidades.`)
            carrinhoCompras[idItem].quantidade = novaQtt
        } else {
            removerItem(idItem)
        }
    }
}

// Calcular o total a se pagar
function verTotal() {
    let valor = 0
    for (let item in carrinhoCompras) {
        valor += carrinhoCompras[item].precoProduto * carrinhoCompras[item].quantidade
    }
    console.log(`O valor total a se pagar é R$${valor.toFixed(2)}`)
}

novoItem('Escova de dentes', 3.00, 3)
novoItem('Caixa de som', 30.00, 1)
novoItem('Pacote de biscoito', 5.00, 5)

verCarrinho()
atualizarQtt(0, 1)
verCarrinho()
verTotal()
// Feito por Júlio Néri