/*
# Sistema de Gestão de Projetos

Programa em JavaScript para gerenciar projetos em uma empresa.

Cada projeto tem as seguintes propriedades:
1. Nome
2. Descrição
3. Data de início
4. Data de conclusão
5. Lista de membros da equipe

Cada membro da equipe tem as seguintes propriedades:
1. Nome
2. Cargo

O programa é capaz de realizar as seguintes operações:
1. Adicionar um novo projeto ao sistema.
2. Adicionar um membro à equipe de um projeto.
3. Listar todos os projetos cadastrados.
4. Listar todos os membros da equipe de um projeto específico.

// Feito por Júlio Néri
// Siga-me => github.com/julioneri
*/

let listaProjetos = []


// Cria um novo Projeto
function criarProjeto(nome, descricao, dataInicio, dataConclusao) {
    console.log()
    console.log('[================== CRIANDO UM PROJETO =================]')
    projeto = {
        nome: nome,
        descricao: descricao,
        dataInicio: dataInicio,
        dataConclusao: dataConclusao,
        listaMembros: []
    }
    listaProjetos.push(projeto)
    console.log('Projeto criado com sucesso!')
}


// Cria e adiciona um Membro à equipe de um Projeto existente
function adicionarMembro(idProjeto, nome, cargo) {
    if (idProjeto >= 0 && idProjeto < listaProjetos.length) {
        membro = {
            nome: nome,
            cargo: cargo
        }
        listaProjetos[idProjeto].listaMembros.push(membro)
        console.log(`${nome} foi adicionado(a) ao projeto '${listaProjetos[idProjeto].nome}'.`)
    } else {
        console.log('Desculpe, mas o ID fornecido não é de um projeto existente.')
    }
}


// Lista todos os projetos existentes no sistema
function listarProjetos() {
    console.log()
    console.log('[================== LISTANDO  PROJETOS =================]')
    if (listaProjetos.length > 0) {
        for (let indiceProjeto in listaProjetos) {
            console.log('+-------------------------------------------------------+')
            console.log(`Projeto: ${listaProjetos[indiceProjeto].nome}`)
            console.log(`Descrição: ${listaProjetos[indiceProjeto].descricao}`)
            console.log(`Data de Início: ${listaProjetos[indiceProjeto].dataInicio} | Data de Término: ${listaProjetos[indiceProjeto].dataConclusao}`)
            console.log(`Atualmente com ${listaProjetos[indiceProjeto].listaMembros.length} membro(s).`)
            console.log('+-------------------------------------------------------+')
        }
    } else {
        console.log('Ainda não já projetos adicionados ao sistema.')
    }
}


// Lista todos os membros de um Projeto
function listarMembros(idProjeto) {
    console.log()
    console.log('[================== LISTANDO   MEMBROS =================]')
    if (idProjeto >= 0 && idProjeto < listaProjetos.length) {

        console.log(`Listando membros do Projeto ${listaProjetos[idProjeto].nome}...`)
        if (listaProjetos[idProjeto].listaMembros.length > 0) {
            for (let indiceMembro in listaProjetos[idProjeto].listaMembros) {
                console.log(`+====== MEMBRO Nº ${Number(indiceMembro)+1} =======`)
                console.log(`| Nome: ${listaProjetos[idProjeto].listaMembros[indiceMembro].nome}`)
                console.log(`| Cargo: ${listaProjetos[idProjeto].listaMembros[indiceMembro].cargo}`)
                console.log('+==========================')
            }
        } else {
            console.log('Ainda não há membros adicionados ao projeto.')
        }

    } else {
        console.log('Desculpe, mas o ID fornecido não é de um projeto existente.')
    }
}


criarProjeto('Conecção-Futuro', 'Aplicativo de Bem-Estar', '15/03/2025', '21/05/2025')
adicionarMembro(0, 'Guilherme', 'GP')
adicionarMembro(0, 'Ana', 'Designer')
adicionarMembro(0, 'Moon', 'Programador')

criarProjeto('Amigo-Robô', 'Sistema de Gerenciamento de Tarefas', '11/09/2024', '17/07/2025')
adicionarMembro(1, 'João', 'GP')
adicionarMembro(1, 'Maria', 'Programador')
adicionarMembro(1, 'Sun', 'Programador')

listarProjetos()

listarMembros(0)
listarMembros(1)