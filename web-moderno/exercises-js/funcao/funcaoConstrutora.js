function carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function () {
        if (velocidadeAtual + delta < velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público (este método é só para tornar público a 'velocidadeAtual', sem mexer nela)
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const gol = new carro(100, 23)
gol.acelerar()  // quanto mais chamar o 'acelerar', mais rápido o carro fica
gol.acelerar()
console.log(gol.getVelocidadeAtual())

const ferrari = new carro(350, 80)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()  // como a velocidade passou da máxima, travou na máxima
console.log(ferrari.getVelocidadeAtual())