const peso1 = 1.0;
const peso2 = Number("2.1");

console.log(peso1, peso2);
console.log(Number.isInteger(peso2)); // função: é inteiro?

const prova1 = 9.871;
const prova2 = 6.871;

const notaFinal = (prova1 * peso1) + (prova2 * peso2);
const media = notaFinal / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2));  // função: converte em binário.
console.log(typeof media);
console.log(typeof Number); // Number com N maíusculo é uma função.


// ALGUNS CUIDADADOS COM "NÚMEROS"

console.log( 7 / 0);  // vai retornar "Infinity

console.log("10" / 2); // vai dar certo em JS

console.log("show" * 2); // não vai dar certo. vai retornar NaN

console.log(0.7 + 0.1); // gera imprecisão. especificação do ECMA, para deixar a linguagem rápida.

//console.log(10.567.toString(2)); // não vai dar certo com o valor literal.
console.log((10.567).toString(2)); // tem que botar entre aspas para dar certo



