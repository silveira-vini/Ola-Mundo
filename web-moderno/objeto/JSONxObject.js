const obj = { a: 1, b: 2, c: 'Vinicius', d: true, e: 5.7, function () { return a + b + c } }
const objJSON = JSON.stringify(obj)
console.log(objJSON)  // imprime a string JSON:  {"a":1,"b":2,"c":"Vinicius","d":true,"e":5.7}   - (se atentar ao formato)

const returnObj = JSON.parse(objJSON)
console.log(returnObj)  // imprime o objeto = { a: 1, b: 2, c: 'Vinicius', d: true, e: 5.7 }

const obj2 = {aluno: {nome: 'Rafael', idade: 25}, notas: [5, 6.3] }
console.log(JSON.stringify(obj2))  // imprime a string JSON:  {"aluno":{"nome":"Rafael","idade":25},"notas":[5,6.3]}