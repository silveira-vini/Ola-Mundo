const alturaCrianca1 = 120
const crescimentoCrianca1 = 1.2
const alturaCrianca2 = 100
const crescimentoCrianca2 = 1.15

function diferencaAltura(alturaCrianca1, alturaCrianca2) {
    if (alturaCrianca1 != alturaCrianca2) {
        return true
    } else {
        console.log('Mesma Altura')
        return false
    }
}

diferencaAltura(alturaCrianca1, alturaCrianca2)

function crescimentoCrianca(alturaCrianca1, crescimentoCrianca1, alturaCrianca2, crescimentoCrianca2) {
    if (alturaCrianca1 > alturaCrianca2) {
    
        while (alturaCrianca1 > alturaCrianca2) {
            alturaCrianca1 *= crescimentoCrianca1
            alturaCrianca2 *= crescimentoCrianca2
        }
    }

}