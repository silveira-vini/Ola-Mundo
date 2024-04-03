
function produto(nome, preco) {
    return {
    produto: nome,
    preco: `R$ ${preco}`,
    valorComDesconto: `R$ ${(preco * 0.9).toFixed(2)}`   
}
}

console.log(produto('Arroz', 35.69))
console.log(produto('Carne', 48.89))
console.log(produto('Caviar', 893.99))