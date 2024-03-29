function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(3))
console.log(soma(4, 5, 9.3))
console.log(soma(4, ' mais 3 é igual a: ', 7))