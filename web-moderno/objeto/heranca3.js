const pai = { nome: 'Vinicius', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha1) {
    if (filha1.hasOwnProperty(key)) {
        console.log(key)
    } else {
        console.log(`${key} por herança`)
    }
}

for (let key in filha2) {
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`${key} por herança`)
}

