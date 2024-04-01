const notas = [7.7, 5.9, 4.8, 8.7, 7.2, 6.8]

let notasBaixas1 = []
let notasBaixas2 = []
let notasAltas = []

// função sem callback
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


// função com callback

const mediaRP = nota => nota < 7
const mediaAP = nota => nota >= 7

notasBaixas2 = notas.filter(mediaRP)
console.log(notasBaixas2)

notasAltas = notas.filter(mediaAP)
console.log(notasAltas)