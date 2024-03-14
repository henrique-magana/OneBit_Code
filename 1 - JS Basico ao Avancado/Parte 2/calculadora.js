let dias = 360;

let soma = 50;

let total = 0
for(let i = 1;i<=dias ;i++){

    soma = soma * 1.05
    console.log("Dia " + i + " = R$ " + soma.toFixed(2))

    if(i%60 ==0){
        total+=soma
        console.log("\nRemessa feita, valor acumulado de " + total.toFixed(2))

        soma = soma * 0.2
        console.log("\nNovo valor a começar "+ soma.toFixed(2))


    }
}




