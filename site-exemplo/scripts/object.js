// desestruturar um objeto, ou uma array

let student = {
    id: 1234,
    name: "Vinicius",
    tel: 684684635,
    city: "Brasília"
}

let student1 = {
    id: 4321,
    name: "Fernando",
    tel: 13574687,
    city: "Manaus"
}

let {...copia } = student;
copia.city = "Seatle";

console.log(student);
console.log(copia);



// copiando parte do objeto

let { id, city, ...resto  } = student;
console.log(resto);



// juntando em uma Array

let students = [student, student1];
console.log(students);