/*
# Desafio: Criando um Sistema de Gerenciamento de Notas Escolares

Sistema de gerenciamento de notas escolares.

Cada aluno tem as seguintes propriedades:
1. Nome
2. Notas (uma lista/array de notas)

O programa é capaz de realizar as seguintes operações:
1. Adicionar um novo aluno ao sistema com suas respectivas notas.
2. Listar todos os alunos cadastrados com suas respectivas médias de notas.
3. Buscar um aluno pelo nome e exibir suas notas e média.
4. Calcular e exibir a média geral de todas as notas cadastradas.
*/

let listaAlunos = []

function divisor() {
    console.log('')
}


// Adiciona um aluno e suas notas à uma lista de Alunos
function adicionarAluno(nome, nota01, nota02, nota03=-1) {
    let notaAluno = []
    notaAluno[0] = nota01
    notaAluno[1] = nota02
    notaAluno[2] = nota03
    
    let aluno = {
        nome: nome,
        notas: notaAluno
    }
    listaAlunos.push(aluno)
    console.log('Novo aluno adicionado com sucesso!')
}

function listarAlunos() {
    if (listaAlunos.length != 0) {
        console.log('[--------------------------------]')

        for (let indiceAluno in listaAlunos) {
            console.log(` Nome do aluno: ${listaAlunos[indiceAluno].nome}`)

            let c = 1 // Contador
            for (let n in listaAlunos[indiceAluno].notas) {
                if (n != -1) {
                    console.log(` Nota 0${c}: ${(listaAlunos[indiceAluno].notas[n]).toFixed(1)}`)
                    c++
                }
            }
            console.log('[--------------------------------]')
        }
    } else {
        console.log('Ainda não há alunos registrados no sistema.')
    }
}


adicionarAluno('João', 5.5, 7.0, 9.5)
adicionarAluno('Maria', 5.9, 7.5, 9.0)
adicionarAluno('Paula', 7.0, 5.5, 9.5)

listarAlunos()

console.log(listaAlunos)
