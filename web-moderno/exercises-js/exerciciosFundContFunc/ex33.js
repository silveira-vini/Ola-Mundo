const vetorInt = [5, 2, 3, 7]
const vetorString = ['Rafael', 'Carlos', 'Amanda', 'Fabiana']
const vetorDouble = [4.5, 3.1, 2.3, 1.8]

// let newArray1 = vetorInt.concat(vetorString, vetorDouble)

// console.log(newArray1)

const newVetor = [...vetorInt, ...vetorString, ...vetorDouble]
console.log(newVetor)

const cloneNewVetor = [...newVetor]
console.log(cloneNewVetor)