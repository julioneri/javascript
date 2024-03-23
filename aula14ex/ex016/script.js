function contar() {
    var startNum = window.document.querySelector('input#startNum')
    var endNum = window.document.querySelector('input#endNum')
    var stepNum = window.document.querySelector('input#stepNum')
    
    var resultado = window.document.getElementById('resul')

    var start = Number(startNum.value)
    var end = Number(endNum.value)
    var step = Number(stepNum.value)

    // Testando se os valores de início (startNum) e fim (endNum) foram obrigatóriamente preenchidos
    if (start != '' && end != '' && start > 0 && end > 0) {
        resultado.textContent = ''

        // Testando se é uma contagem progressiva
        if (start < end) {
            if (step == '' || step > end || step <= 0) {
                alert('Na ausência de passos válidos, será considerado 1.')
                var step = 1
                stepNum.value = 1
            }
    
            for (c=start;c<=end;c+=step) {
                resultado.textContent += `${c} > `
            }
    
        // Testando se é uma contagem regressiva
        } else if (start > end) {
            if (step == '' || step > end || step >= 0) {
                alert('Na ausência de passos válidos, será considerado -1.')
                var step = -1
                stepNum.value = -1
            }

            for (c=start;c>=end;c+=step) {
                resultado.textContent += `${c} > `
            }
        }
        resultado.textContent += 'FIM'

    } else {
        resultado.textContent = 'Por favor, preencha todos os campos com valores positivos e válidos.'
    }
}