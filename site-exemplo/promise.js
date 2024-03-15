//Explicação:
// https://www.youtube.com/watch?v=nRJhc6vXyK4

//1º Parte - explicação inicial:


// let promessa = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve('Sucesso');
//     } else {
//         reject('Falha');
//     }
// })

// promessa.then((mensagem) => {console.log('Resultado no "then": ' + mensagem)})
//         .catch((erro) => {console.log('Resultado no "catch": ' + erro)})




//------------------------------------------------
// 2ª Parte, tornando a Promise mais rebuscada

// const betterDev = 'vinicius'

// function whoIsBetterCallback(posCallback, errorCallback) {

//     return new Promise((resolve, reject) => {

//         if (betterDev != 'vinicius' && betterDev != 'fabiana') {
//             reject({
//                 name: 'this is wrong, ' + betterDev,
//                 message: '? really!?!?'
//             })
//         } else {
//             resolve({
//                 name: betterDev,
//                 message: 'family Barbosa Ribeiro are the best!!'
//             })
//         }

//     })
// }

// whoIsBetterCallback()
//     .then((result) => { console.log(result.name + '? Yeah! ' + result.message) })
//     .catch((error) => { console.log(error.name + error.message) })



    //----------------------------------------------------
    // 3ª parte, uma Promise funcionando

const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then( (resp) => resp.json() )
    .then( function (data) {
        console.log(data);

        return data.map(function(user) {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch( (error) => {
        console.log('oops!!' + error)
    })