// {
//     console.log("número ímpares:")
//     console.log(1);
//     console.log(3);
//     console.log(5);
//     console.log(7);
//     console.log(9);
// }

// console.log("");

// {
//     console.log("números pares:");
//     console.log(2);
//     console.log(4);
//     console.log(6);
//     console.log(8);
//     console.log(10);
// }

let pares = [];
let impares = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        pares.push(i);
    } else {
        impares.push(i);

    }
}

console.log("números pares de 1 a 10: " + pares);
console.log("número ímpares de 1 a 10: " + impares);
