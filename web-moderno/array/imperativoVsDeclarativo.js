const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2},

]

// Imperativo
let totalNotas1 = 0
for (let i = 0; i < alunos.length; i++) {
    totalNotas1 += alunos[i].nota
}
console.log(totalNotas1 / alunos.length)


// Declarativo
const getNota = aluno => aluno.nota
const somaNotas = (acumulador, nota) => acumulador + nota
const totalNotas2 = alunos.map(getNota).reduce(somaNotas)
console.log( totalNotas2 / alunos.length)