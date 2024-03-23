const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `Olá ${nome}!`  //suporta e considera quebras de linha (enter);



console.log(concatenacao);
console.log(template);

// expressões em template strings
console.log(` 1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();                    //usando funções dentro da template strings
console.log(`transformando em maiúsculo: ${up(nome)}!!`)    //usando funções dentro da template strings