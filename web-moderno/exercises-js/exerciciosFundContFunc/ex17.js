function aumento(salario, plano) {
    switch (plano) {
        case 'A':
            console.log(`Plano escolhido "A", novo salário R$ ${salario * 1.1}`)
            break
        case 'B':
            console.log(`Plano escolhido "B", novo salário R$ ${salario * 1.15}`)
            break
        case 'C':
            console.log(`Plano escolhido "C", novo salário R$ ${salario * 1.2}`)
            break
        default:
            console.log('Plano inválido')
    }
}

aumento(5000, 'C')