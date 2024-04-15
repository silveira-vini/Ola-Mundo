const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, (x, y) => y - x)
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: () => {
        console.log('opa')
    },
    cumprimentar: () => {
        console.log('boa tarde')
    }
}

pessoa.falar()
pessoa.cumprimentar()