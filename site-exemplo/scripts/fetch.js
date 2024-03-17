const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"


function converter() {
    let input = document.getElementById("reais");
    let valor = input.value;
    
    fetch(url)
        .then((res) => {
            console.log(res);
            return res.json();
        
        })
        .then( (data) => {
            console.log(data);
            let valueDollar = data.USDBRL.ask;
            console.log(valueDollar);
            let display = document.getElementById("resultado");
            resu


        })

}