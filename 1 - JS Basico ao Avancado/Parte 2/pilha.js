let baralho = []

contador = 0

while(contador ==0){
    let menu = prompt("1 - colocar carta \n 2 - tirar uma carta \n 3 - Sair \n 4 - Lista Baralho")

    if(menu == 1){
        let proximaCarta = prompt("Qual a proxima carta ")

        baralho.(proximaCarta)

    }else if(menu == 2){
        
        baralho.shift()
    }else if(menu == 3){
        contador++
    }else if(menu == 4){
        alert(baralho)
    }
}