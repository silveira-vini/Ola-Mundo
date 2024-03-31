function Pessoa() {
    this.idade = 0
    const self = this

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

// o 'this' muda e referencia quando colocado dentro do 'setInterval', por esse motivo, é necessário chamar ele fora do 'setInterval', por isso ele foi chamada dentro da função construtora 'Pessoa()', dessa forma ele pega a referencia correto.