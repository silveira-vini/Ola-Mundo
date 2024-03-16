function novoAluno(nome, idade) {
    return { nome, idade }
}

const alunos = [
    novoAluno("Vinicius", 23),
    novoAluno("Carlos", 43),
    novoAluno("Rafael", 65),
    novoAluno("Roberta", 22),
    novoAluno("João", 78),

]

let somaIdades = 0

for (let soma of alunos) {
    
    somaIdades += soma.idade;
}

console.log(somaIdades);
