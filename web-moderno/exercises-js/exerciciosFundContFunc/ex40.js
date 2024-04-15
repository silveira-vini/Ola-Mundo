function conceito(notas) {

    let conceitos = notas.map(num => {
        if (num >= 9 && num <= 10) {
            console.log(`Nota: ${num} - Conceito: A`)
        } else if (num >= 7 && num < 9) {
            console.log(`Nota: ${num} - Conceito: B`)
        } else if (num >= 5 && num < 7) {
            console.log(`Nota: ${num} - Conceito: C`)
        } else if (num >= 0 && num < 5) {
            console.log(`Nota: ${num} - Conceito: D`)
        } else {
            console.log(`A nota ${num} é inválida. Digite uma nota de 0 a 10`)
        }
    })

    return conceitos
}

conceito([5.5, 7.6, 2.3, 9])