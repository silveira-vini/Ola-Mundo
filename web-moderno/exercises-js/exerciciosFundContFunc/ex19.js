function precoFinal(codigo, qtde) {
    switch (codigo) {
        case 100:
            return `${qtde} cachorros quente, total de R$${(qtde * 3).toFixed(2)}`
            break
        case 200:
            return `${qtde} hamburgers simples, total de R$${(qtde * 4).toFixed(2)}`
            break
        case 300:
            return `${qtde} cheeseburgers, total de R$${(qtde * 5.5).toFixed(2)}`
            break
        case 400:
            return `${qtde} baurus, total de R$${(qtde * 7.5).toFixed(2)}`
            break
        case 500:
            return `${qtde} refrigerantes, total de R$${(qtde * 3.5).toFixed(2)}`
            break
        case 600:
            return `${qtde} sucos, total de R$${(qtde * 2.8).toFixed(2)}`
            break
        default:
            return 'Produto inexistente'
    }
}

console.log(precoFinal(400, 3))