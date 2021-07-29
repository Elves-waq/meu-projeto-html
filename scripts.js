

let button = document.getElementById("button")

let Select = document.getElementById("TrocaDeMoeda")



async function ConveterMoedas() {
    let Moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()

    })
    let dolar = Moedas.USDBRL.high
    let Euro = Moedas.EURBRL.high
    console.log(dolar)
    console.log(Euro)



    let inputValuereais = Number(document.getElementById("input").value)
    let InputMoeda = document.getElementById("america")

    if (Select.value === "US$ Dólar Americano") {
        let ValorEmDolares = inputValuereais / dolar
        InputMoeda.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (Select.value === "€$ Euro") {
        let ValorEmEuros = inputValuereais / Euro
        InputMoeda.innerHTML = ValorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    }

    let real = document.getElementById("real")


    real.innerHTML = inputValuereais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}
//esta funçao que muda as bandeiras;

function TrocaDeMoeda() {
    let textoMoedas = document.getElementById("D")
    let b = document.getElementById("b")

    if (Select.value === "US$ Dólar Americano") {

        textoMoedas.innerHTML = "Dólar Americano"
        b.src = "./img/estados-unidos (1) 1.png"
    }

    if (Select.value === "€$ Euro") {

        textoMoedas.innerHTML = "Euro"
        b.src = "./img/euro.png"
    }
    ConveterMoedas()


}


button.addEventListener("click", ConveterMoedas)
Select.addEventListener("change", TrocaDeMoeda)



