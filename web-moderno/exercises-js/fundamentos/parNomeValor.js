// par nome/valor
const saudacao = 'opa'  // contexto léxico 1

function exec() {
    const saudacao = 'fala'  // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 36,
    peso: 85,
    endereço: {
        logradouro: 'Rua Camargo',
        numero: 127,
        cidade: 'Brasília',
        uf: 'DF'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)