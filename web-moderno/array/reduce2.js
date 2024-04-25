const alunos = [
    { nome: 'João', nota: 1, bolsista: true},
    { nome: 'Maria', nota: 3, bolsista: false},
    { nome: 'Pedro', nota: 5, bolsista: true},
    { nome: 'Ana', nota: 7, bolsista: false},
]

const bolsistas = alunos.map((aluno) => aluno.bolsista )

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, atual) => acumulador && atual
console.log(`Todos os alunos são bolsistas: ${bolsistas.reduce(todosBolsistas)}`) 


// Desafio 2: Algum aluno é bolsista?
const algumBolsista =  (acumulador, atual) => acumulador || atual
console.log(`Algum aluno é bolsistas: ${bolsistas.reduce(algumBolsista)}`) 
