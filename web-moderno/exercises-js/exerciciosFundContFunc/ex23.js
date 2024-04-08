function capturarAluno(alunos, codigo) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].codigo === codigo) {
            return alunos[i]
        }
    }
}

const alunos = [
    { nome: 'Fábio', codigo: 1, n1: 4.5, n2: 5.7, n3: 6.6 },
    { nome: 'Rafael', codigo: 2, n1: 8.9, n2: 5.2, n3: 8.6 },
    { nome: 'Gustavo', codigo: 3, n1: 4.5, n2: 4.7, n3: 3.6 }
]

const codigo = 2                                    // aqui será o input do código do aluno

const alunoEncontrado = capturarAluno(alunos, codigo)

if (alunoEncontrado) {

    const n1 = alunoEncontrado.n1
    const n2 = alunoEncontrado.n2
    const n3 = alunoEncontrado.n3

    const mediaFinal = (((n1 * 4) + (n2 * 3) + (n3 * 3)) / 10).toFixed(1)

    if (mediaFinal >= 5) {
        console.log(`Aluno: ${alunoEncontrado.nome}, média final: ${mediaFinal}, situação: APROVADO`)
    } else {
        console.log(`Aluno: ${alunoEncontrado.nome}, média final: ${mediaFinal}, situação: REPROVADO`)
    }

} else {
    console.log('Código inválido');
}
