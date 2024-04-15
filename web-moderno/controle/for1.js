for (let valor = 1; valor <= 10; valor++) {
    console.log(`valor retornado: ${valor}`)
}
console.log('fim da impressão')

console.log('-----------------------------------------')




console.log('Notas dos alunos:')

const notas = [4.8, 6.9, 1.7, 8.9, 7.6, 3.8, 5.8, 6.7]

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

console.log('-----------------------------------------')

const aluno1 = {nome: 'Vinícius', nota: 7.5}
const aluno2 = {nome: 'Gustavo', nota: 3.5}
const aluno3 = {nome: 'Fabiana', nota: 7.6}
const alunos = [aluno1, aluno2, aluno3]

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i].nome} - nota: ${alunos[i].nota}`)
}