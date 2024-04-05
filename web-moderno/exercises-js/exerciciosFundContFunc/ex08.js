const stgPoints = '10 20 20 8 25 3 0 30 1'
const splitPoints = stgPoints.split(' ')
const arrayPoints = splitPoints.map((splitPoints) => { return parseInt(splitPoints) })
const arrayLength = arrayPoints.length

function dados() {
    let recordAtual = arrayPoints[0]
    let recordBatidos = 0
    let wrtPoint = 0

    for (let i = 0; i < arrayLength; i++) {
        if (arrayPoints[i] > recordAtual) {
            recordAtual = arrayPoints[i]
            recordBatidos++
        } else if (arrayPoints[i + 1] > arrayPoints[i]) {
            wrtPoint = arrayPoints.indexOf(arrayPoints[i + 1])
        }
    }
    return [recordBatidos, wrtPoint]
}

console.log(dados(arrayPoints))