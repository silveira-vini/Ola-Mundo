function somarNumeros ( array ) {
    const soma = array.reduce((acumulador, atual) => acumulador += atual)
    return soma
}

console.log(somarNumeros([1,2,3,4,5]))