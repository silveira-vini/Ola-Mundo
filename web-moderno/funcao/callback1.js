const fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((name, index) => console.log((index + 1) + '. ' + name))  // funções 'forEach' retornam 3 argumentos (value, index, array).