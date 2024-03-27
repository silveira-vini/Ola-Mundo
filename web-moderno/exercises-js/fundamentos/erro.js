const erroObj = {}

function tratarErro(err) {
    erroObj.erro = err
    erroObj.id = 1
    console.log(`código do erro: ${erroObj.id}`)
}

function gritar(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (err) {
        tratarErro(err)
    } finally {
        console.log('término da aplicação')
    }
}

const obj = { name: 'Roberto' }
gritar(obj)