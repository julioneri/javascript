// EXERCÍCIO:

// Desenvolva um programa que leia o comprimento de três retas e diga ao usuário se elas podem ou não formar um triângulo.
function closeModal() {
    var resulModal = window.document.querySelector('div#resulmodal')
    resulModal.style.display = 'none'
}

function calcular() {
    var resulModal = window.document.querySelector('div#resulmodal') 
    resulModal.style.display = 'flex'

    var resultado = window.document.querySelector('p#resul')
    var r1 = window.document.querySelector('input#reta1')
    var r2 = window.document.querySelector('input#reta2')
    var r3 = window.document.querySelector('input#reta3')

    reta1 = Number(r1.value) 
    reta2 = Number(r2.value)
    reta3 = Number(r3.value)

    // Verificando se os campos estão em branco
    if (reta1 != '' && reta2 != '' && reta3 != '') {
        
        // Verificando se os valores não podem formar um triângulo
        if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {

            if (reta1 == reta2 && reta2 == reta3) {
                resultado.innerHTML = 'Os valores que você inseriu podem formar um  Equilátero!'

            } else if (reta1 != reta2 && reta2 != reta3 && reta3 != reta1) {
                resultado.innerHTML = 'Os valores que você inseriu podem formar um  Escaleno!'
            } else {
                resultado.innerHTML = 'Os valores que você inseriu podem formar um  Isóceles!'
            }
    } else {
        resultado.innerHTML = 'Os valores que você inseriu não podem formar um triângulo válido.'
    }

    } else {
        var iconResul = window.document.querySelector('span#iconResul')
        iconResul.innerHTML = 'chat_error'
        resultado.innerHTML = 'Você precisa preencher todos os campos. Por favor, tente novamente!'
    }
}