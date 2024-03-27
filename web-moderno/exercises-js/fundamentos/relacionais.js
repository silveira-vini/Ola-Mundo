console.log('a) ', '1' == 1)   // dois iguais, lê-se "é igual a"
console.log('b) ', '1' === 1)  // três iguais, lê-se "é estritamente igual a" (no caso é falso, pois o primeiro é uma string, o segundo um número)
console.log('c) ', '3' != 3)   // lê-se "é diferente que"
console.log('d) ', '3' !== 3)  // lê-se "é estritamente diferente que"

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1, '', d2)
console.log('e) ', d1 == d2) // relaciona endereços de memória, por isso não são iguais.
console.log(d1.getTime(), d2.getTime())
console.log('f) ', d1.getTime() === d2.getTime())  // pegou o numero atribuído, por isso é igual.