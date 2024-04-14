function pAritimetica(n, a1, r) {
    let aN = a1 + (n - 1) * r
    let termos = []

    for (let i = a1; i <= aN; i += r){
        termos.push(i)
    }
    return termos
        
}

function soma(termos) {
    let soma = 0
    termos.forEach(element => { 
        soma = soma + element
    });

    return soma
}

let n = 12
let a1 = 3
let r = 5

console.log(pAritimetica(n, a1, r))
console.log(`A soma dos termos dessa PA é ${soma(pAritimetica(n, a1, r))}`)