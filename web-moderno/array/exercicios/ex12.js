function filtrarNumeros(array) {
    return array.filter(elem => typeof elem === 'number')
}

console.log(filtrarNumeros([1, 'javascript', 6, true, 5]))