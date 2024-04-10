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

        let tempo = 0
        while (alturaCrianca1 > alturaCrianca2) {
            alturaCrianca1 *= txCrianca1
            alturaCrianca2 *= txCrianca2
            tempo++
        }
        console.log(parseInt(alturaCrianca1), parseInt(alturaCrianca2))
        console.log(`Em ${tempo} meses passará de altura`)


    } else {
        console.log('Mesma Altura')
    }
}


dadosCriancas(120, 100, 1.1, 1.15)

