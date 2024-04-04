function jurosSimples(capInicial, juros, tempo) {
    return capInicial + (capInicial * juros * tempo)
}
console.log(jurosSimples(100, 0.1, 2).toFixed(2))


function jurosCompostos(capInicial, juros, tempo) {
    return capInicial * ((1 + juros) ** tempo)
}
console.log(jurosCompostos(100, 0.1, 2).toFixed(2))