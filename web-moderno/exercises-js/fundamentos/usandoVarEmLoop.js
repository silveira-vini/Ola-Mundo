// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log('valor de "i" =', i)


//------------------------------------------------------------

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(() => {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()   // erro do JavaScript = vai dar sempre 10, pois o VAR não tem escopo de função