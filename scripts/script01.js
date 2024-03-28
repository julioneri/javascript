let listPessoas = []

function newPessoa(nome, sobrenome, idade) {
    let pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
    listPessoas.push(pessoa)
}

function exibirPessoas(lista) {
    for (let ind in lista) {
        console.log(`Olá, meu nome é ${lista[ind].nome} ${lista[ind].sobrenome} e tenho ${lista[ind].idade} anos.`)
    }
}

newPessoa('Maria', 'Madalena', 25)
newPessoa('João', 'Jadotta', 27)
newPessoa('Pedro', 'Pedreiro', 21)

console.log(`O total de pessoas cadastradas é ${listPessoas.length}.`)
exibirPessoas(listPessoas)