const valor = 'global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()  // ela vai achar o valor 'global'. O contexto léxico é importante para a função, qual o local que ela foi declarada. A função carrega consigo o local que ela foi declarada.