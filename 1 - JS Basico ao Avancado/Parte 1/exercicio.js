let n1 = prompt("Qual o numero a ser multiplicado?")
let somar = 0

for(let x=0;x<21;x++){

    let multiplica = x * n1
    console.log("Tabuada do " + n1 + ", calculo " + n1 + " X " + x + " = " + multiplica)
    somar+= multiplica
}

console.log("Soma total " + somar)