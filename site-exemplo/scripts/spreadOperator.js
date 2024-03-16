const person = {
    name: "Vinicius",
    age: 32
}

const contact = {
    tel: 84965766,
    email: "contato@contato.com"
}

const copiaPerson = { ...person, ...contact };

copiaPerson.age = 45;

console.log(person);
console.log(copiaPerson);

//-------------



const grades1 = [5, 6, 2, 8, 3];
const grades2 = [9, 5, 1, 7, 3];

grades2.push(4);

//observar a diferença com e sem os 'spread operators'
const gradesAll = [...grades1, ...grades2];
const gradesAll2 = [grades1, grades2];

console.log(gradesAll);
console.log(gradesAll2);