// EXERCÍCIO:

// Escreva um programa que leia a velocidade de um carro.

// Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado.

// A multa vai custar
// R$7.00 por cada Km acima do limite.

function calcular() {
    var velocidade = window.document.querySelector
    ('input#vel')
    var resulmodal = window.document.querySelector('div#resulmodal')
    var resultado = window.document.querySelector('p#resul')
    var iconResul = window.document.querySelector('span#iconResul')
    
    if (velocidade.value != '') {
        if (velocidade.value > 80) {
            // Calculando o valor a ser multado
            var valorMulta = (velocidade.value - 80) * 7
    
            iconResul.innerHTML = 'warning'
            resulmodal.style.display = 'flex'
            resultado.innerHTML = `Este veículo excedeu a velocidade de 80 km/h, portanto, será multado!<br><br>A multa custará R$${valorMulta.toFixed(2)} reais (R$7.00 por cada quilômetro acima do limite).`
        } else if (velocidade.value >= 0 && velocidade.value <= 80) {

            iconResul.innerHTML = 'done_outline'
            resulmodal.style.display = 'flex'
            resultado.innerHTML = 'Este veículo não excedeu os 80 km/h, portanto, não será multado!<br><br>Continue dirigindo com cuidado!'
        } else {
            iconResul.innerHTML = 'chat_error'
            resulmodal.style.display = 'flex'
            resultado.innerHTML = 'Parece que você inseriu um valor inválido. Por favor, tente novamente!'
        }
    }
}
