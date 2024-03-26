function contar() {
    var startNum = window.document.querySelector('input#startNum')
    var endNum = window.document.querySelector('input#endNum')
    var stepNum = window.document.querySelector('input#stepNum')
    
    var resultado = window.document.getElementById('resul')
    var total = window.document.getElementById('total')
    var cont = 0

    var start = Number(startNum.value)
    var end = Number(endNum.value)
    var step = Number(stepNum.value)
    

    // Testando se PELO MENOS UM dos valores de início e fim foram obrigatóriamente preenchidos.
    if (start != '' || end != '') {
        // Testando se será uma contagem progressiva
        if (start < end) {
            // Verificando necessidade de correção do valor para passos.
            if (step <= 0) {
                alert('Passo inválido! Considerando passo como 1.')
                step = 1
                stepNum.value = 1
            }

            resultado.textContent = ''
            for (s=start;s<=end;s+=step) {
                resultado.textContent += `${s} > `
                cont++
            }
            resultado.textContent += 'FIM!'
            total.innerHTML = `Total de passos: ${cont}`

        // Testando se será uma contagem regressiva
        } else if (start > end) {
            // Verificando necessidade de correção do valor para passos.
            if (step >= 0) {
                alert('Passo inválido! Considerando passo como -1.')
                step = -1
                stepNum.value = -1
            }
            resultado.textContent = ''
            for (s=start;s>=end;s+=step) {
                resultado.textContent += `${s} > `
                cont++
            }
            resultado.textContent += 'FIM!'
            total.innerHTML = `Total de passos: ${cont}`

        // Caso os valores digitados sejam iguais
        } else {
            resultado.textContent = 'Você precisa digitar valores diferentes para fazer uma contagem.'
            total.innerHTML = ''
            
        }
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos com valores válidos.'
        total.innerHTML = ''
    }
}