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

function nameAge(student) {
    return student.name + " tem " + student.age + " anos"
}

console.log(students.map(nameAge));