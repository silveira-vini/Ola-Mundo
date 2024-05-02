const frase = "Conhece-te a ti mesmo"

function contarCaractere ( car, frase) {
    let contador = 0
    const array = frase.split('')
    for (let i = 0; i < array.length; i++){
        if (array[i] == car) contador++
    }
    return contador
}

console.log(contarCaractere( 'c', frase))