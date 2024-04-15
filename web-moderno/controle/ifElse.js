const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('aprovado')
    } else {
        console.log('reprovado')
    }
}

imprimirResultado(5)
imprimirResultado(10)
imprimirResultado('Epa')  // cuidado, é necessário tratar esse input!!