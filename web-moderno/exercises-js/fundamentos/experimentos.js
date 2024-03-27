let a = 3

this.b = 5

global.c = 7



console.log(this)

console.log(module.exports)

console.log(module.exports == this)

console.log(a)

console.log(this.a)

console.log(global.c)

console.log(this.b)

module.exports = { e: 45, f: 7, g: 89}

console.log(module.exports)
console.log(this)
console.log()

console.log(module.exports == this)


