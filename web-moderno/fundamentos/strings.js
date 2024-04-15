const escola = "cod3r";

console.log(escola.charAt(4));  // retorna o caractere que está no índice (4);
console.log(escola.charAt(7));  // não vai retorar nada, nem erro;
console.log(escola.charCodeAt(3));  // código UNICODE no índice (3);
console.log(escola.indexOf("d")); // retorna o índice da string informada;
console.log(escola.substring(1));  // retorna a string a partir do índice informado.
console.log(escola.substring(1, 3)) // retorna a strig a partir de (1) até a (3), sem incluir a (3).
console.log("Escola ".concat(escola).concat("!")); // concatenação.
console.log("Escola " + escola + "!"); // concatenação;
console.log(escola.replace(3, "e")); // pega o íncice (3) e substitui pela string "e";
console.log(("ana, maria, pedro").split(",")); // transforma uma string em array (qual o divisor).





