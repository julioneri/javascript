// EXERCÍCIO:

// Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.

// Para salários superiores a R$1.250,00, calcule um aumento de 10%.

// Para inferiores ou iguais, o aumento é de 15%.
function closeModal() {
    var resulModal = window.document.querySelector('div#resulmodal')
    resulModal.style.display = 'none'
}

function calcular() {
    var val = window.document.querySelector('input#valor')
    var resulModal = window.document.querySelector('div#resulmodal')
    var resultado = window.document.querySelector('p#resul')
    var iconResul = window.document.querySelector('span#iconResul')

    resulModal.style.display = 'flex'

    if (val.value != '') {
    
        var valor = Number(val.value)
        iconResul.innerHTML = 'currency_exchange'

        if (valor > 1250) {
            var valorNovo = valor + (valor * 10) / 100
            resultado.innerHTML = `
            O salário atual é superior a R$1.250,00.<br><br>
            
            O funcionário passará a ganhar R$${valorNovo.toFixed(2)}, um aumento de 10% do seu salário atual.`
        } else {
            var valorNovo = valor + (valor * 15) / 100
            resultado.innerHTML = `O salário atual é inferior a R$1.250,00.<br><br>
            
            O funcionário passará a ganhar R$${valorNovo.toFixed(2)}, um aumento de 15% do seu salário atual.`
        }

    } else {
        iconResul.innerHTML = 'chat_error'
        resultado.innerHTML = 'Você precisa preencher todos os campos. Por favor, tente novamente!'
    }

    
}