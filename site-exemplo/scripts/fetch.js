const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"


function converter() {
    let input = document.getElementById("reais");
    let valor = input.value;
    
    fetch(url)
        .then((res) => {
            
            return res.json();
        
        })
        .then( (data) => {
            
                       
            let valueDollar = data.USDBRL.ask;
            
            
            let convertion = valor * valueDollar;
            console.log(convertion)


        })

}