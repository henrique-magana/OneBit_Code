let imoveis = []

let contadora = 0;

while(contadora == 0){
    let menu = prompt("1 - Quantidade de imoveis cadastrados \n 2 - Cadastrar um imovel \n 3 - Sair")

    if(menu == 1){
        alert(imoveis.length)
    }else if(menu == 2){

        let objeto = {
            nome: "",
            quantidadeQuartos: 0,
            quantidadeBanheiros: 0,
            garagem: ""
        }
        let nomeProprietario = prompt("Qual o nome do proprietario? ")
        let quantidadeDeQuartos = prompt("Quantos quartos tem?")
        let quantidadeDeBanheiros = prompt("Quantos banheiros tem? ")
        let possuiGaragem = prompt("Sim/Nao")

        objeto.nome = nomeProprietario
        objeto.quantidadeQuartos = quantidadeDeQuartos
        objeto.quantidadeBanheiros = quantidadeDeBanheiros
        objeto.garagem = possuiGaragem

        imoveis.push(objeto)

        }else if(menu == 3){
            contadora++
        }

}

console.log(imoveis)