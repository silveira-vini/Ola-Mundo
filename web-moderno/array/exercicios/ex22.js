const frase = 'Me divirto aprendendo a programar'

function contarPalavras (frase) {
    const array = frase.split(" ")
    return array.length
}

console.log(contarPalavras(frase))