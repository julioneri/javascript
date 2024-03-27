let num = window.document.querySelector('input#txtn')
let lista = window.document.querySelector('select#listArea')
let resul = window.document.querySelector('p#resultado')
let vetores = []

function isNumber(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarValor() {
    if (isNumber(num.value) && !inList(num.value, vetores)) {
        resul.innerHTML = ''
        vetores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (vetores.length != 0) {
        resul.innerHTML = ''

        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        let soma = 0
        for (pos in vetores) {
            soma += vetores[pos]
            if (vetores[pos] > maior)
                maior = vetores[pos]
            if (vetores[pos] < menor)
                menor = vetores[pos]
        }
        let media = soma / tot
        resul.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        resul.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resul.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resul.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resul.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`
    } else {
        window.alert('Você precisa inserir valores antes de finalizar.')
    }
}