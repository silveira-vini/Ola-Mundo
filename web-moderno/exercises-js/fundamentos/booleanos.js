let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;  // 1 é verdadeiro, 0 é falso.

console.log(!!isAtivo); // o número '1' representa verdadeiro, negando duas vezes
console.log(!isAtivo);

console.log("");
console.log("resolve para verdadeiro:");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(isAtivo = Infinity));

console.log("");
console.log("resolve para falso:");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("");
console.log("pra finalizar:");
console.log(!!('' || null || 0 || "epa" || 123));
console.log('' || null || 0 || "epa" || 123);       // retorna o primeiro valor verdadeiro

let nome = "";
console.log(nome || "Nome desconhecido");   //se a string estiver vazia, vai cair no "Nome desconhecido"


