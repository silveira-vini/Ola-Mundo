console.log(Math.ceil(6.1))


const obj1 = {}
obj1.nome = 'bola'
obj1.many = 10
obj1.price = 23

function Obj(nome, many, price) {
    this.nome = nome
    this.many = many
    this.price = price
}


const obj2 = new Obj('Pedro', 3, 35)
const obj3 = new Obj('Rafaela', 6, 25)

const { nome: n, price: p } = obj2
console.log(n , p)

let nome2 = obj2.nome
let preco = obj2.price

console.log(nome2, preco)

const arrayCadastro = []
arrayCadastro.push(obj2, obj3)


