function repetir(param, repetir) {
    let result = []
    for (let i = 0; i < repetir; i++){
        result.push(param)
    }
    return result
}

console.log(repetir('código',3))