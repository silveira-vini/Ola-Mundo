function qualFruta(fruta) {
    switch (fruta) {
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui estão, são 3 reais o quilo'
            break
        case 'maça':
            return 'Não vendemos essa fruta aqui'
            break
        default:
            return 'erro'
    }
}

console.log(qualFruta('banana'))