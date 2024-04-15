// https://www.youtube.com/watch?v=k8eib-FI6OA&t=419s

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome

    }
    nomeCompleto() {
        return `Nome Completo: ${this.nome} ${this.sobrenome}`
    }
}


const joao = new Pessoa('João', 'da Silva')
const maria = new Pessoa('Maria', 'da Graça')

console.log(joao)
console.log(joao.nomeCompleto())
console.log(maria)
console.log(maria.nomeCompleto())