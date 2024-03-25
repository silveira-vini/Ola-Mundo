// armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(4, 5)


// armazenando uma arrow function em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 6))


// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(9, 5))

const raizQuadrada = c => Math.sqrt(c)
console.log(raizQuadrada(81))