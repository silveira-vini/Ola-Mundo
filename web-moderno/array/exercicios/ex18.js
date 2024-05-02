let numeros = [8, 6, 1, 5, 3, 4, 24]

function media (array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return (soma / array.length).toFixed(2)
}

console.log(media(numeros))