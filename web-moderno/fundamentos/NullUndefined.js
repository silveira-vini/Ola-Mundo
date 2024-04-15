let valor  // não inicializada
console.log(valor)

valor = null  // inicializada, mas está vazia
console.log(valor)

const produto = {}
console.log(produto.preco) 
produto.preco = 3.5
console.log(produto.preco) 
produto.preco = null         // limpando o parametro
console.log(!!produto.preco) // convertendo para bollean
console.log(produto)
delete produto.preco
console.log(produto)