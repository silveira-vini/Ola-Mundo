const exemplo = [ 10, 8 ]
const [ a, b ] = exemplo
console.log( a )
console.log( b )

const exemplo2 = [ 10, 9, 8, 7]
const [ n1, , n3, , n5, n6 = null] = exemplo2
console.log( n1, n3, n5, n6 )

const exemplo3 = [[, 8, 8], [9, 6, 8]]
const [ , [ , nota]] = exemplo3
console.log(nota)