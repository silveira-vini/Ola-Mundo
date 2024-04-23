Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['gabriel', 'carla', 'joão', 'raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`Posição ${indice + 1}: ${nome}`)
});