let lista = []

function adicionarValor() {
    let txtn = window.document.querySelector('input#txtn')

    if (txtn.value.length == 0 || txtn.value < 0 || txtn.value > 100 || procurarNum(txtn.value) == -1) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        resultado.innerHTML = ''
        let num = Number(txtn.value)

        let listArea = window.document.getElementById('listArea')
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        item.value = `item${num}`
        listArea.appendChild(item)

        lista.push(num)
    }
}

function procurarNum(numero) {
    for (let num in lista) {
        if (numero == lista[num]) {
            return -1
        }
    }
}

function somarValores() {
    let soma = 0
    for (let num in lista) {
        soma += lista[num]
    }
    return soma
}

function finalizar() {
    if (lista.length == 0) {
        alert('Não é possível finalizar sem antes possuir valores atribuídos.')
    } else {
        let resultado = window.document.getElementById('resultado')

        lista.sort()
        let maiorV = lista[(lista.length)-1]
        let menorV = lista[0]
        let totalSoma = somarValores()
        let mediaV = totalSoma / lista.length
    
        resultado.innerHTML =
        `Ao todo, temos ${lista.length} números cadastrados.<br>
        O maior valor informado foi ${maiorV}.<br>
        O menor valor informado foi ${menorV}.<br>
        Somando todos os valores, temos ${totalSoma}.<br>
        A média dos valores digitados é ${mediaV.toFixed(2)}.<br>`
    }
}