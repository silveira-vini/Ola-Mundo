function bhaskara(a, b, c) {
    const delta = (b * b) - 4 * (a * c)
    if (delta < 0) {
        return 'Delta é negativo, não há raízes reais'
    } else if (delta == 0) {
        return `Única raiz real: ${(-b) / (2 * a)}`
    } else {
        return `As raízes reais são: ${((-b) + Math.sqrt(delta)) / (2 * a)} e ${((-b) - Math.sqrt(delta)) / (2 * a)}`
    }

}

// resolvendo 3x² - 5x + 12 = 0
console.log(bhaskara(3, -5, 12))

// resolvendo x² - 4x + 4 = 0
console.log(bhaskara(1, -4, 4))

// resolvendo 2x² - 5x + 2 = 0
console.log(bhaskara(2, -5, 2))