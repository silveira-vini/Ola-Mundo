const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"


function converter() {
    let input = document.getElementById("reais");
    let valor = parseFloat(input.value).toFixed(2);
    
    fetch(url)
        .then((res) => {
            
            return res.json();
        
        })
        .then( (data) => {
            
            let valueDollar = data.USDBRL.ask;
            let date = data.USDBRL.create_date;
            let convertion = parseFloat(valor / valueDollar).toFixed(2);
            let display = document.getElementById("resultado");
            let dayHour = document.getElementById("day");

            display.innerHTML = `R$ ${valor} equivale a U$ ${convertion}`;
            dayHour.innerHTML = `Data/hora da conversão: ${date}`;
                  
        })

}