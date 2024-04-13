const vetor = [12, 56, 18, 20, 40, 8, 11, 25, 36, 10, 41]

let maior = vetor[0]
let menor = vetor[0]

for (let i = 1; i < vetor.length; i++) {
    if (maior < vetor[i]) {
        maior = vetor[i]
    }
    
    if (menor > vetor[i]) {
        menor = vetor[i]
    }
}

console.log(maior)
console.log(menor)