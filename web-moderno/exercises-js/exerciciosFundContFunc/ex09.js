const arredondarNota = (nota) => {

    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;

    if ( nota < 38) {
        return nota
    } else if (proximoMultiploDe5 - nota < 3) {
        return proximoMultiploDe5
    } else {
        return nota
    }
}

function notaFinal(nota) {

    if (arredondarNota(nota) < 0 || arredondarNota(nota) > 100) {
        console.log('Nota inválida. Insira nota entre 0 e 100')
    } else if (arredondarNota(nota) < 40) {
        console.log(`Nota: ${arredondarNota(nota)}, Reprovado!!`)
    } else {
        console.log(`Nota: ${arredondarNota(nota)}, Aprovado!!`)
    }
}

notaFinal(38)