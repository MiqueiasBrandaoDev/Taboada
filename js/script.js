//captura o clickd do btn
document.querySelector(".btn-calc").addEventListener("click", (e) => {
    
    //bloqueia o carregamento da pagina ao apertar no btn
    e.preventDefault()

    //resetando dados anteriores
    document.querySelector("table").innerHTML = ""
    document.querySelector("#number-table").textContent = ""

    //recebendo valores do input
    let valorTabuada = document.querySelector("#input-table").value
    let multiplicarAte = document.querySelector("#multiplicarAte").value
    
    //se existir valor nos 2 inputs
    if(!valorTabuada == "" && !multiplicarAte == ""){
        document.querySelector("#input-empty").classList.add("hide")

        //informando o numero da table no title
        document.querySelector("#number-table").textContent = `Tabuada do número: ${valorTabuada}`

        //obtendo corpo da resposta
        let arr = tabuada(valorTabuada, multiplicarAte)

        //apresentando array na table
        document.querySelector(".template-paragrafo").classList.add("hide")
        document.querySelector(".template-table").classList.remove("hide")

        arr.forEach(row => {

            const newRow = document.createElement("tr")
            const newContent = document.createElement("td")
            newContent.textContent = row
            newRow.appendChild(newContent)

            document.querySelector(".template-table").appendChild(newRow)

        });
        

    }

    //se não existir valor
    else{
        document.querySelector("#input-empty").classList.remove("hide")
        document.querySelector(".template-paragrafo").classList.remove("hide")
        document.querySelector(".template-table").classList.add("hide")
    }

})

function tabuada(tab, multiAte){
    
    const arrTab = []

    for(i = 1; i <= multiAte; i++){
        arrTab.push(`${tab} X ${i}: ` + tab * i)
    }
    return arrTab

}