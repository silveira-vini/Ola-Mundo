const vetor = [12, 56, 18, 20, 40, 8, 11, 25, 36, 10, 41]

let soma = 0

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
}

let media = soma / vetor.length

console.log(media.toFixed(1))