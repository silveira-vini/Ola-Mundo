function getNumberRandom(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let valor           // no Do While, não é necessário setar a variável "valor" no início
let contagem = 0

do {
    valor = getNumberRandom(0, 100)
    console.log(`O valor sorteado foi: ${valor}`)
    contagem++
} while (valor != 50)

console.log(`Fim do sorteio. Foram necessários ${contagem} sorteios para sair seu número.`)

