function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor não permitido: ${area}`)
    } else {
        return area
    }
}

console.log(area(2,3))
console.log(area(4))
console.log(area())
console.log(area(2, 4, 5, 7, 9))
console.log(area(4, 6))