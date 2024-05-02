const palavra = 'pro'
const strings = ["programação", "mobile", "profissional"]

function filtrarPalavrasSemelhantes (palavra, strings) {
    return strings.filter( str => str.toLowerCase().includes(palavra.toLowerCase())  )
}

console.log(filtrarPalavrasSemelhantes(palavra, strings))