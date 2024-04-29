function inverso(param) {
    const tipo = typeof param
    if (tipo == 'boolean') return !param
    else if (tipo == 'number') return -param
    else return `Booleano ou número esperados. O Parâmetro é do tipo ${tipo}`
}

console.log(inverso(2000))
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso('vinicius'))
console.log(inverso([4, 8]))
console.log(inverso(-58))