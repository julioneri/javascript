/*
# Lista de Tarefas (To-Do List)

Programa em JavaScript que representa uma lista de tarefas (To-Do List).

Cada tarefa tem as seguintes propriedades:
1. Descrição da tarefa
2. Data de criação
3. Estado da tarefa (concluída ou não)

O programa é capaz de realizar as seguintes operações:
1. Adicionar uma nova tarefa à lista.
2. Listar todas as tarefas da lista.
3. Marcar uma tarefa como concluída.
4. Remover uma tarefa da lista.

// Feito por Júlio Néri
// Siga-me => github.com/julioneri
*/

let dataAtual = new Date()
let dataHoje = dataAtual.getDate()

let listaTarefas = []

function novaTarefa(descricao, dataCriacao) {
    let tarefa = {
        descricao: descricao,
        dataCriacao: dataCriacao,
        estado: false
    }
    listaTarefas.push(tarefa)
    console.log('Nova tarefa adicionada com sucesso!')
}

function exibirTarefas() {
    for (let tarefa in listaTarefas) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log(`ID da tarefa: ${tarefa}`)
        console.log(`Descrição: ${listaTarefas[tarefa].descricao}`)
        console.log(`Data de criação: ${listaTarefas[tarefa].dataCriacao}`)
        if (listaTarefas[tarefa].estado) {
            console.log('Estado da tarefa: Concluída')
        } else {
            console.log(`Estado da tarefa: Não concluída`)
        }
    }
}

function procurarTarefa(id) {
    if (id < 0 || id >= listaTarefas.length) {
        console.log('Tarefa não encontrada!')
        return -1
    }
}

function concluirTarefa(id) {
    if (procurarTarefa(id) != -1) {
        listaTarefas[id].estado = true
        console.log(`[YEAH!] Tarefa "${listaTarefas[id].descricao}" definida como concluída.`)
    }
}

function removerTarefa(id) {
    if (procurarTarefa(id) != -1) {
        console.log(`[YEAH!] Tarefa "${listaTarefas[id].descricao}" deletada com sucesso!`)
        listaTarefas.splice(id, 1)
    }
}

novaTarefa('Arrumar a roupa', dataHoje)
novaTarefa('Varrer a varanda', dataHoje)
novaTarefa('Cozinhar a comida', dataHoje)
concluirTarefa(0)
exibirTarefas()
removerTarefa(0)
exibirTarefas()