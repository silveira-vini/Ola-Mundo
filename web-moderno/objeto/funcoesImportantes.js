const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {enumerable: true, writable: true, value: '01/01/2019'})

console.log(pessoa)
pessoa.dataNascimento = '20/02/2018'
console.log(pessoa)
console.log(Object.keys(pessoa))

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, d: 4, a: 5}

Object.assign(dest, o1, o2)

console.log(dest)