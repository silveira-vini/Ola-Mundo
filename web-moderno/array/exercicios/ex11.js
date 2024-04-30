function removerPropriedade ( obj , prop ) {
    const newObj = {...obj}
    delete newObj[prop]
    console.log(newObj)
    console.log(obj)
}

removerPropriedade({a: 1, b: 2}, 'a')