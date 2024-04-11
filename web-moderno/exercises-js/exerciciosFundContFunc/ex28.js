let numeros = [84, 384, 381, 38, 1836, 3148, 2, 268, 418, 73, 168, 167, 815, 21, 1644, 17]

let pares = 0
let impares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares ++
    } else {
        impares++
    }
}

console.log(`Esse vetor possui ${pares} números pares e ${impares} números ímpares`)