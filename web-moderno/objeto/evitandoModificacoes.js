// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Vinicius', preco: 5.90, tag: 'promoção'
})

console.log(produto)

produto.nome = 'Rafael'
produto.desconto = 0.12
delete produto.tag

console.log(produto)


// Object.seal

const pessoa = { nome: 'Vanessa', idade: 25}
Object.seal(pessoa)
console.log(pessoa)

pessoa.nome = 'Rafaela'
delete pessoa.idade
pessoa.nascimento = '20/01/1999'

console.log(pessoa)


// Object.freeze = Object.seal + Object.preventExtensions