function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const p1 = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco   // chave e valor como o mesmo nome, não precisa indicar a chave 'getPreco: getPreco'.
}

console.log(p1.getPreco())


// chamando o 'call' e o 'apply'
const p2 = { 
    preco: 49990, 
    desc: 0.20 
}
console.log(getPreco.call(p2, 0.17, 'U$'))
console.log(getPreco.apply(p2, [0.17, 'U$']))