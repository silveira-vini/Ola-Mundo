function sorteio (num) {
    const numSorteado = Math.ceil(Math.random()*10)

    if (num < 1 || num > 10) {
        return 'Número Inválido. Digite um valor inteiro entre 1 e 10'
    } else if ( num == numSorteado) {
        return `Parabéns! O número sorteado foi o ${numSorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${numSorteado}`
    }
}

console.log(sorteio(8))