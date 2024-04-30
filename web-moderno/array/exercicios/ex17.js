function despesasTotais(array) {

    const total = array.reduce((acc, obj) => acc += obj.preco, 0)

    console.log(total)
}

despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])