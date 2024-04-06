function diaSemana(numero) {
    switch (numero) {
        case 1:
        case 7:
            return 'Hoje é fim de Semana'
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Hoje é dia útil'
            break
        default:
            return 'insira um dia válido'
    }
}

console.log(diaSemana(8))