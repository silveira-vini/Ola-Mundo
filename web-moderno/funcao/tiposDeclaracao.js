// function declaration - como ela foi declarada fora de uma variável, o Javascript vai carregar primeiro todas as funções, depois vai começar a ler a linhas
console.log(soma(3,4))  // pode chamar a função antes da declaração
function soma (x, y) {
    return x + y
}


// function expression - como foi declarada dentro de uma variável, só dá pra chamar depois da sua declaração.
//console.log(sub(5,2))  -> vai dar erro, pois está sendo acessada antes de ser inicializada.
const sub = function (x, y) {
    return x - y
}
console.log(sub(5,2))



// named function expression -  também só dá pra chamar depois da declaração
const mult = function mult(x, y) {
    return x * y
}

