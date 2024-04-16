// objeto é uma coleção de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto.valor = 54.80
produto['tipo de base'] = 'quatro apoios'

console.log(produto)


//deletando um par
delete produto.nome

console.log(produto)


// objeto mais complexo
const carro = {
    modelo: 'uno mille',
    valor: 15590,
    proprietario: {
        nome: 'Artur Bernardes',
        nascimento: '20/09/1987',
        endereco: {
            logradouro: 'rua fulano de tal',
            numero: 453
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 27,
            cnhValida: true
        },
        {
            nome: 'Rafaela',
            idade: 18,
            cnhValida: false
        },
        {
            nome: 'Rogério',
            idade: 47,
            cnhValida: true
        }
    ],
    calcularValorSeguro() {
        // ...
    }
}

carro.proprietario.endereco.numero = 454
carro.condutores[0].cnhValida = false

console.log(carro)

// delete carro.condutores[2]           // o comando delete apaga o conteúdo do índice, mas não o remove. em vez do comando delete, usar o splice(), pois esse remove o índice por completo.

carro.condutores.splice(2, 1)

console.log(carro)