function fatorial (numero) {
    
    if (numero == 0 ) {
        return 1
    } else {
        numero *= fatorial( numero - 1)
        return numero
    }
}

console.log(fatorial(5))


/* Função Recursiva: 

fatorialRecursivo(5)
  = 5 * fatorialRecursivo(4)
  = 5 * (4 * fatorialRecursivo(3))
  = 5 * (4 * (3 * fatorialRecursivo(2)))
  = 5 * (4 * (3 * (2 * fatorialRecursivo(1))))
  = 5 * (4 * (3 * (2 * (1 * fatorialRecursivo(0)))))
  = 5 * (4 * (3 * (2 * (1 * 1)))) // A recursão para aqui, pois alcançou a condição base
  = 5 * (4 * (3 * (2 * 1)))
  = 5 * (4 * (3 * 2))
  = 5 * (4 * 6)
  = 5 * 24
  = 120
*/