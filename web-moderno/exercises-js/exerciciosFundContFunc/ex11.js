function isBissexto(ano) {
    if (ano % 400 == 0) {
        return true
    } else if ( ano % 100 == 0) {
        return false
    } else if ( ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(isBissexto(1900))