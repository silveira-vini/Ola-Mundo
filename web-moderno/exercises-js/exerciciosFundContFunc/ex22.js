function jurosCompostos(valor, mes) {

    if (mes == 1) {
        return valor
    } else {
        return valor * Math.pow(1.05, (mes - 1))
    }
}

console.log(jurosCompostos(100, 10).toFixed(2))