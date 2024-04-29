function multiplicar(x, y) {

    if (x >= 0 && y >= 0) {

        let acumulador = 0
        for (let i = 0; i < x; i++) {
            acumulador += y
        }

        return acumulador
    } else {
        return 'Digite valores maiores que zero'
    }
}

console.log(multiplicar(4, 3))