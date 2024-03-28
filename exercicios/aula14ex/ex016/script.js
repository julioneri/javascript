function contar() {
    let inicio = window.document.getElementById('startNum')    
    let fim = window.document.getElementById('endNum')
    let passo = window.document.getElementById('stepNum')

    let resul = window.document.getElementById('resul')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resul.innerHTML = 'Por favor, preencha todos os campos.'

    } else if (inicio.value == fim.value) {
        resul.innerHTML = 'Por favor, digite valores diferentes.'
    } else {
        resul.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            // Valor de passo inválido
            window.alert('Passo inválido! Considerando passo como 1.')
            passo.value = 1
            p = 1
        }
        if (i < f) {
            // Contagem progressiva
            for (let c = i; c <= f; c += p) {
                resul.innerHTML += `${c} > `
            }
        } else if (i > f) {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resul.innerHTML += `${c} > `
            }
        }
        resul.innerHTML += 'FIM!'
        
    }
}