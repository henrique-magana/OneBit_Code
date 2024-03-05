let dias = 52;

let soma = 30;

for(let i = 1;i<=dias ;i++){

    soma = soma * 1.05
    console.log("Aposta " + i + " = R$ " + soma.toFixed(2))

    if(i % 4 == 0){
        console.log(i/4 + " dias")
    }
}

