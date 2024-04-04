function division(x, y) {
    this.result = x / y
    this.restdiv = x % y
}

const resultado = new division(5, 2)
console.log(`Resultado da divisão: ${resultado.result}, resto da divisão ${resultado.restdiv}`)