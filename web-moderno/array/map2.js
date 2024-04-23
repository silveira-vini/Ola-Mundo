const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// retornar um array apenas com os preços

const convertJSON = element => JSON.parse(element)
const getPrice = element => element.preco
const standardPrice = element => `R$ ${element.toFixed(2).replace('.', ',')}`

const prices = carrinho.map(convertJSON).map(getPrice).map(standardPrice)

console.log(prices)