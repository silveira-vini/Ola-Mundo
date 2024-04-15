
function rand( {min, max} ) {
    const valor = Math.random() * ( max - min ) + min
    return Math.floor(valor)
}

const obj = { max: 60, min: 20}
console.log(rand(obj))

const obj2 = { min: 0, max: 1000 }
console.log(rand(obj2))