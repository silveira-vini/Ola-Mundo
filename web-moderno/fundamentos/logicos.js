function compras(trabalho1, trabalho2) {
    if (trabalho1 && trabalho2) console.log('comprei a TV de 50 polegadas')
    if (trabalho1 ^ trabalho2) console.log('comprei a TV de 32 polegadas')
    if (trabalho1 || trabalho2) console.log('comprei um sorvete para tomar')
    else console.log('Você está saudável pois não tomou o sorvete, mas.... vai trabalhar vagabundo')
}

compras(true, false)
