const nums = [1, 2, 3, 4, 5]

const numsDobrado = nums.map(num => num * 2)
console.log(numsDobrado)

const soma10 = num => num + 10
const resto3 = num => num / 3
const reais = num => `R$ ${num.toFixed(2).replace('.', ',')}`

resultado = numsDobrado.map(soma10).map(resto3).map(reais)
console.log(resultado)