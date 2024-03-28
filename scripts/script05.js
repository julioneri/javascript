/*
# Sistema de Gestão de Funcionários

Sistema de gestão de funcionários de uma empresa em JavaScript.

Cada funcionário tem as seguintes propriedades:
1. Nome
2. Cargo
3. Salário

O programa é ser capaz de realizar as seguintes operações:
1. Adicionar um novo funcionário ao sistema.
2. Listar todos os funcionários cadastrados.
3. Calcular o total da folha de pagamento (soma de todos os salários).

// Feito por Júlio Néri
// Siga-me => github.com/julioneri
*/

let listaFuncionarios = []

function novoFuncionario(nome, cargo, salario=1500) {
    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario
    }
    listaFuncionarios.push(funcionario)
    console.log('Novo funcionário adicionado com sucesso!')
}

function listarFuncionarios() {
    for (let pessoa in listaFuncionarios) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log(`Funcionário(a): ${listaFuncionarios[pessoa].nome}`)
        console.log(`Cargo atual: ${listaFuncionarios[pessoa].cargo}`)
        console.log(`Salário atual: ${listaFuncionarios[pessoa].salario}`)
    }
}

function folhaTotal() {
    let fTotal = 0
    for (let pessoa in listaFuncionarios) {
        fTotal += listaFuncionarios[pessoa].salario
    }
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(`A folha total de pagamento é igual a R$${fTotal.toFixed(2)}.`)
}

novoFuncionario('João', 'Administração', 2500)
novoFuncionario('Amanda', 'Contador', 2700)
novoFuncionario('Marta', 'Gerente', 5500)

listarFuncionarios()
folhaTotal()