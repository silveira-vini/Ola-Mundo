let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a  // o return está implícito
console.log(dobro(Math.PI))



let ola = function () {
    return 'Olá'
}
ola = () => 'olá'
console.log(ola())

