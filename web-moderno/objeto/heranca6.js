class Aula {
    constructor(nome, videoID) {
        this.nome = nome
        this.videoID = videoID
    }
}

const aula1 = new Aula('Heranças', 387345)
const aula2 = new Aula('Construtora', 31877)

console.log(aula1)
console.log(aula2)