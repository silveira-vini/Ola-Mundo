console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split(' ').reverse().join(' ')
}

console.log(String.prototype)

console.log('Vinicius Silveira Ribeiro'.reverse())

Array.prototype.first = function () {
    return this[0]
}
Array.prototype.last = function () {
    return this[this.length - 1]
}

const array1 = [3, 5, 9]

console.log(array1.first())
console.log(array1.last())

let array2 = new Array
console.log(array2.__proto__)
array2 = [6, 8, 21, 17]
console.log(array2.last())