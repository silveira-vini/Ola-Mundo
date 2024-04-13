const vetor = [12, 56, 18, 20, 40, 8, 11, 25, 36, 10, 41]

let dentro = 0
let fora = 0

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
        dentro++
    } else {
        fora++
    }
}

console.log(`${dentro} números dentro do intervalo [10,20]`)
console.log(`${fora} números fora do intervalo [10,20]`)