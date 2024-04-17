// let Pessoa = {
//     nome: "João",
//     sobrenome: "Santos",
//     idioma : "Português",
 
//     get linguagem() {
//       return this.idioma
//     },
 
//   }
// console.log(Pessoa.linguagem)
// console.log(Pessoa)

let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "",
 
    set linguagem (lang) {
        this.idioma = lang;
      }
 
  }
Pessoa.linguagem = "Português"
console.log(Pessoa.idioma)
console.log(Pessoa)