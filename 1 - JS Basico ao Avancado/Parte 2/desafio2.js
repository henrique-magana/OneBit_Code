const vagas = []

function listarvagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe o o nome para a vaga")
    const descricao = prompt("Informe a descricao da vaga")
    const dataLimite = prompt("Informe uma data limite dd/mm/aaaa")

    const confirmacao = confirm("Deseja criar uma nova com essas informações?\n" +
        "Nome " + nome + "\nDescricao" + descricao + "\nDataLimite" + dataLimite)

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}


function exibirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja exibir ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "vaga numero" + indice + 
        "\n Nome: " + vaga.nome + 
        "\n Descricao: " + vaga.descricao +
        "\n Data Limite: " + vaga.dataLimite +
        "\n Quantidade de Candidatos: " + vaga.candidatos.length +
        "\n Candidatos inscritos: na vaga: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do candidato ")
    const indice = prompt("Informe o indice da vaga para qual o candidato queira se inscrever ")
    const vaga = vagas[indice]

    const confirmacao = confirm(" Deseja inscrever o candidato" + candidato + " na vaga " + indice + " ? \n" +
    "Nome: " + vaga.nome + "\nDescricao: " + vaga.descricao + "\nData limite" + vaga.dataLimite)

    if(confirmacao){
        vaga.candidato.push(candidato)
        alert("Inscricao realizada com sucesso")
    }
}


function excluirVaga(){
    const indice = prompt("Informe o indice da vaga para excluir ")
    const vaga = vagas[indice]

    const confirmacao = confirm("Tem certeza que deseja excluir a vaga" + indice +
    "Nome: " + vaga.nome + "\nDescricao: " + vaga.descricao + "\nData limite" + vaga.dataLimite)

    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluída")
    }
}

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de vagas de emprego \n" +
        "Escolha umas das opções \n" +
        "1 - Listar vagas disponiveis\n " +
        "2 - Criar uma nova vaga \n" +
        "3 - Exibir uma vaga\n" +
        "4 - Inscrever um cnadidato \n" +
        "5 - Excluir uma vaga \n" +
        "6 - Sair"
    )
}

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          exibirVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
  }
  
  executar()