// Função sem retorno:
function imprimirSoma(a, b) {
    console.log( a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)     // 2 + Undefined = NaN
imprimirSoma(2, 4, 7, 3, 7)  // pega os primeiros dois, e ignora o restante


// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(3, 4))
console.log(3)  // a função atribui 0 ao b