// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 8, 0.1)
const p2 = new Produto('caderno', 35, 0.08)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

p1.nome = 'lapiseira'

console.log(p1.nome, p1.getPrecoComDesconto())


// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Rafael', 7650, 3)
const f2 = criarFuncionario('Márcia', 9660, 1)

console.log(f1.nome, f1.getSalario())
console.log(f2.nome, f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)