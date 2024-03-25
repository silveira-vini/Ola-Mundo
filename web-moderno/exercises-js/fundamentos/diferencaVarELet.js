let numero = 1
{
    let numero = 2                          // a variável "let" existe apenas dentro do escopo do bloco
    console.log("let dentro =", numero)
}
console.log("let fora =", numero)

