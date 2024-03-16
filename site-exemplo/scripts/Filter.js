function newStudent(name, age) {
    return { name, age }
}

let students = [
    newStudent("Mario", 23),
    newStudent("Vinicius", 36),
    newStudent("Sara", 29),
    newStudent("João", 35),
    newStudent("Fabiana", 30)
]

let players = [
    newStudent("Fernando", 27),
    newStudent("Gustavo", 38),
    newStudent("Joana", 26),
    newStudent("José", 37),
    newStudent("Amariles", 30)
]


function under30(person) {
    return person.age < 30;
}

function over30(person) {
    return person.age >= 30;
}

//alterar o Array e o filtro nessa função variável abaixo

const personFiltered = players.filter(under30);

// -------

for (let list of personFiltered) {
    console.log(list.name, list.age, "anos");
}
