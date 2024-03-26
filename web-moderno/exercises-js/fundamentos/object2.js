// Definindo uma função construtora
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Instanciando a função Pessoa para criar um novo objeto
var pessoa1 = new Pessoa("João", 30);
var pessoa2 = new Pessoa("Maria", 25);
var pessoa3 = new Pessoa("Vinícius", 36);

console.log(pessoa1);
console.log(pessoa2); 
console.log(pessoa3);