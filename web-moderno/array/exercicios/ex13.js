function objetoParaArray(obj) {
    let newArray = []
    for (let chave in obj) {
        newArray.push([chave, obj[chave]])
    }
    return newArray
}

console.log(objetoParaArray({ a: 1, b: 2, c: 3 }))