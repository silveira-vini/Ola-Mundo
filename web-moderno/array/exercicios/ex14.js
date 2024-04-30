function paresDeIndicesPares(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            newArray.push(array[i])
        }
    }

    return newArray.filter(elem => elem % 2 == 0)

}

console.log(paresDeIndicesPares([6, 3, 14, 23, 54, 27, 89]))