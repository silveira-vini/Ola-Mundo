let vetorA = [1,2,3,4,5]
let vetorB = [6,7,8,9,10]

function inversao(vetorA, vetorB) {

    
    for (i = 0; i < vetorA.length; i++){
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
    }
    console.log(vetorA)
    console.log(vetorB)

}

inversao(vetorA, vetorB)