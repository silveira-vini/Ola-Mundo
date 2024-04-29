function receberPrimeiroEUltimo(array) {
    const resultado = []
    resultado.push(array[0])
    resultado.push(array[array.length -1])
    return resultado
}

console.log(receberPrimeiroEUltimo([7, 14, 'olá']))
console.log(receberPrimeiroEUltimo([-100, 'aplicativo', 16]))
