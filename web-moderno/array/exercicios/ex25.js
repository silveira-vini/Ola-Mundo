const frase = 'Fundámentos'

function removerVogais(frase) {
    let semAcento = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let minuscula = semAcento.toLowerCase()
    let array = minuscula.split('')
    let soConsoantes = array.filter(ltr => ltr != 'a' && ltr != 'e' && ltr != 'i' && ltr != 'o' && ltr != 'u' && ltr != ' ')
    let resultado = soConsoantes.join('')
    console.log(resultado)

}

removerVogais(frase)
