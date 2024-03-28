function getNumberRandom(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let valor = 0
let contagem = 0

while (valor != 50) {
    valor = getNumberRandom(0, 100)
    console.log(`O valor sorteado foi: ${valor}`)
    contagem++
}

console.log(`Fim do sorteio. Foram necessários ${contagem} sorteios para sair seu número.`)

