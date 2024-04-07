function notas(valor) {
    if (valor >= 100) {
        console.log(`${parseInt(valor / 100)} notas de R$ 100,00`)
    }
    if ((valor % 100) >= 50) {
        console.log(`${parseInt(valor % 100 / 50)} notas de R$ 50,00`)
    }
    if (((valor % 100) % 50) >= 10) {
        console.log(`${parseInt(((valor % 100) % 50) / 10)} notas de R$ 10,00`)
    }
    if (((valor % 100) % 50) % 10 >= 5) {
        console.log(`${parseInt((((valor % 100) % 50) % 10) / 5)} notas de R$ 5,00`)
    }
    if ((((((valor % 100) % 50) % 10) % 5)) >= 1) {
        console.log(`${parseInt((((valor % 100 % 50) % 10) % 5))} notas de R$ 1,00`)
    }
}

notas(2507)