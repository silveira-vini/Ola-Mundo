const alunos = [
    { nome: 'João', nota: 1, bolsista: false},
    { nome: 'Maria', nota: 3, bolsista: true},
    { nome: 'Pedro', nota: 5, bolsista: false},
    { nome: 'Ana', nota: 7, bolsista: true},
]

const resultMap = alunos.map( a => a.nota)

console.log(resultMap)

const resultSoma = resultMap.reduce(function(acumulador, atual) {
    console.log ( acumulador, atual )
    return acumulador + atual
}, 0)

const resultMaior = resultMap.reduce(function(acumulador, atual) {
    console.log( acumulador, atual )
    return Math.max( acumulador, atual)
})

console.log(`Resultado da reduce(SOMA): ${resultSoma}`)
console.log(`Resultado da reduce(MAX): ${resultMaior}`)
