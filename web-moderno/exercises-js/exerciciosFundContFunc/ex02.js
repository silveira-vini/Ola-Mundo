function triangle(a, b, c) {
    if (a == b && b == c) {
        console.log('Este é um triangulo Equilátero')
    } else if (a == b || b == c || a == c) {
        console.log('Este é um triangulo Isósceles')
    } else {
        console.log('Este é um triângulo Escaleno')        
    }
}

triangle(5, 4, 3)