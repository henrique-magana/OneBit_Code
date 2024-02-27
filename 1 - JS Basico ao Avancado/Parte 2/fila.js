let fila = []

let contador = 0

while (contador == 0){

    let pergunta = prompt("1 - Adicionar mais um na lista \n 2 - listar fila \n 3 - Proximo \n 4 - sair ")

    if( pergunta == 1){
        let nome  = prompt("Qual o proximo paciente? ")
        fila.push(nome)
    }else if(pergunta == 2){
        alert(fila)
    }else if(pergunta == 3){
        fila.shift()
    }else{
        contador++
    }
}