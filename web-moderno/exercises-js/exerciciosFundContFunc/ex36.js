const valoresNumericos = [3, 4, 6, 8]
const numeroInteiro = 9

function multiplicacao(valoresNumericos, numeroInteiro) {
    const resultado = []
    for (let i = 0; i < valoresNumericos.length; i++) {
        resultado.push(valoresNumericos[i] * numeroInteiro)
    }
    return resultado
}
console.log(multiplicacao(valoresNumericos, numeroInteiro))

function multiMaior5(valoresNumericos, numeroInteiro) {
    const menor5 = valoresNumericos.filter(num => num > 5)
    const resultado = []
    for (let j = 0; j < menor5.length; j++) {
        resultado.push(menor5[j] * numeroInteiro)
    }
    return resultado
}
console.log(multiMaior5(valoresNumericos, numeroInteiro))