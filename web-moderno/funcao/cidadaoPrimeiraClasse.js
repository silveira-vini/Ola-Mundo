// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em uma Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

// passar função como parâmetro
function run(func) {
    func()
}
run(function () {console.log('executando função')})

// uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}
const resultMais = soma(2,3)
resultMais(4)