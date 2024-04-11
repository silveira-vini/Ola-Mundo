function dadosCriancas(alturaCrianca1, alturaCrianca2, txCrianca1, txCrianca2) {

    // Validando os argumentos
    if (typeof alturaCrianca1 !== 'number' || typeof alturaCrianca2 !== 'number' ||
        typeof txCrianca1 !== 'number' || typeof txCrianca2 !== 'number' ||
        alturaCrianca1 < 0 || alturaCrianca2 < 0 || txCrianca1 < 0 || txCrianca2 < 0) {
        console.error('Os argumentos devem ser números não negativos.');
        return;
    }

    // Separando as alturas iguais e diferentes
    if (alturaCrianca1 != alturaCrianca2) {
            // se criança1 for maior
        if (alturaCrianca1 > alturaCrianca2) {

            let tempo = 0
            while (alturaCrianca1 > alturaCrianca2) {
                alturaCrianca1 *= txCrianca1
                alturaCrianca2 *= txCrianca2
                tempo++
            }
            console.log(`Em ${tempo} meses passará de altura`)
            console.log(`Criança1 medindo ${parseInt(alturaCrianca1)} e Criança2 medindo ${parseInt(alturaCrianca2)}`)

            // se criança2 for maior
        } else {
            let tempo = 0
            while (alturaCrianca2 > alturaCrianca1) {
                alturaCrianca1 *= txCrianca1
                alturaCrianca2 *= txCrianca2
                tempo++
            }
            console.log(`Em ${tempo} meses passará de altura`)
            console.log(`Criança1 medindo ${parseInt(alturaCrianca1)} e Criança2 medindo ${parseInt(alturaCrianca2)}`)
        }
    } else {
        console.log('Mesma Altura')
    }
}

dadosCriancas(100, 120, 1.15, 1.1)

