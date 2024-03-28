const notas = [4.8, 6.9, 1.7, 8.9, 7.6, 3.8, 5.8, 6.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const aluno1 = {nome: 'Vinícius', nota: 7.5, semestre: 2}

for (let atributo in aluno1) {
    console.log(`${atributo}: ${aluno1[atributo]}`)
}
