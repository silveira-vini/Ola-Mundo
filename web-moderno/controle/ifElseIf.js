const resultado = function (nota) {
    if (nota <= 10 && nota >= 9) {
        console.log('Parabéns!! excelente nota')
    } else if (nota < 9 && nota >= 7) {
        console.log('Aprovado, mas pode ser melhor')
    } else if (nota < 7 && nota >= 5) {
        console.log('Recuperação')
    } else if (nota < 5 && nota >= 0) {
        console.log('Reprovado!')
    } else {
        console.log('invalid grade. text a value between 0 and 10')
    }
}

resultado(9.8)
resultado(7.6)
resultado(6)
resultado(3.8)
resultado(12.5)
resultado()