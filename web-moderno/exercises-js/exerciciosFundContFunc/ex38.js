function impares(inicio = 0, fim = 100) {

    let numeros = []

    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }

    for (let i = inicio; i <= fim; i++) {
        numeros.push(i)
    }

    let resultado = numeros.filter(num => num % 2 != 0)

    return resultado

}

console.log(impares(55, 89))