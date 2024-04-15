{
    {
        {
            {var sera = "será?"}
        }
    }
}
console.log(sera)  // variável criada de forma global, visível em todo o código


function teste() {
    var local = 123
}
console.log(teste())
//  console.log(local)   // retorna um erro.  a variável var = local não está neste escopo. Variável criada entro de uma function, ela só é visivel dentro da function