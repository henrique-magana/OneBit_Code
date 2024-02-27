contador = 0;

let vagas = []

while(contador == 0){
    menu()
}

function menu(){
    const menu = prompt("Qual opção? \n 1 - Lista vagas disponiveis \n 2 - Criar uma nova vaga \n 3 - Visualizar uma vaga \n 4 - Inscrever uma vaga \n 5 - Excluir uma vaga \n 6 - Sair")
    switch (menu) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga()
            break
        case "6":
            contador++
            break

    }
}

function listarVagas(){
    if(vagas.length == 0){
        alert("Sem vagas no momento")
    }else{
        const vagasCadastradas = vagas.map(function(vaga){
            return vaga.nome + " e a quantidade de candidatos = " + vaga.quantidadeInscritos
        })

        for(let i = 0;i < vagas.length;i++){
            console.log("Indice " + i +" e "+ vagasCadastradas[i])
        }
    }
}

function criarVaga(){
    const vaga ={
        nome: "",
        descricao: "",
        dataLimite: "",
        quantidadeInscritos: 0
    }

    let nome = prompt("Digite o nome da vaga ")
    let descricao = prompt("Digite a descricao da vaga ")
    let dataLimite = prompt("Digite a data limite da vaga ")

    vaga.nome = nome
    vaga.descricao = descricao
    vaga.dataLimite = dataLimite


    let enviar = prompt("Confirmar envio?")

    if(enviar == "sim"){
        vagas.push(vaga)
    }else{
        return "Nao salvo"
    }
}

function vizualizarVaga(){
    let 
}