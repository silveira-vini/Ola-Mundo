const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()            //remove o último elemento de um array
console.log(pilotos)

pilotos.push('Verstappen')  //adiciona um elemento ao final do array
console.log(pilotos)

pilotos.shift(pilotos)   // remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton')  // adiciona um elemento ao início do array
console.log(pilotos)

//splice() pode adicionar ou remover elementos de índices definidos
pilotos.splice(2, 0, 'Botas', 'Massa')  //adicionando
console.log(pilotos)

pilotos.splice(4, 1)         // removendo
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)  // gera um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2)