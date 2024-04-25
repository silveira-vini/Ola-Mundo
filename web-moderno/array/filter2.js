Array.prototype.filter2 = function (callback) {

    let resultado = []

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i])) {
            resultado.push(this[i])
        }
    }

    return resultado
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const barato = p => p.preco < 500
const fragil = p => p.fragil

console.log(produtos.filter2(barato).filter2(fragil))