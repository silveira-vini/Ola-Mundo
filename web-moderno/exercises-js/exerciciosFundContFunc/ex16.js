function calculadora(x, operacao, y) {

    switch (operacao) {
        case '+':
            return console.log(x + y)
            break
        case '-':
            return console.log(x - y)
            break
        case '*':
            return console.log(x * y)
            break
        case '/':
            return console.log(x / y)
            break
        default:
            return console.log('Operação Inválida')
    }
}

calculadora(8, '/', 5)
