const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()


const talk = pessoa.falar
talk()          
            // conflito entre paradigmas: Funcional e Orientada a Objetos - OO . Chamando a função dessa forma, a função falar() está       associada a variável "talk", o que torna o 'this' undefined. // No primeiro exemplo, a função falar() está associada a variável "pessoa", o que faz com o que o 'this' retome a variável correta.


const talk2 = pessoa.falar.bind(pessoa)
talk2()
            // com a função 'bind', é possível amarrar o objeto da variável original, dessa forma o 'this' vai conseguir definir o objeto correto.