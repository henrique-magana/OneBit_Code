function calcularAreaDoTriangulo(){
    const base = prompt("informe a base do triangulo")
    const altura = prompt("Informe a altura do triangulo")
    return (base * altura)/2
}

function calcularAreaDoRetangulo(){
    const base = prompt("informe a base do retangulo")
    const altura = prompt("Informe a altura do triangulo")
    return base * altura
}

function calcularAreaDoQuadrado(){
    const lado = prompt("Informe o lado")
    return lado * lado
}

function calcularAreaDoTrapezio(){
    const baseMaior = prompt("Informe a base Maior")
    const baseMenor = prompt("Informe a base Menor")
    const altura = prompt("Informe a Altura")
    return ((baseMaior + baseMenor)*altura)/2
}

function calcularAreaDoCirculo(){
    const raio = prompt("Qual o valor do raio?")
    return 3.14 * (raio **2)
}

const pergunta = prompt("Qual vc quer? ")

let resultado

switch(pergunta){
    case "1":
        resultado = console.log(calcularAreaDoCirculo())
    break
    case "2":
        resultado = console.log(calcularAreaDoQuadrado())
        break
    case "3":
        resultado = console.log(calcularAreaDoRetangulo())
        break
    case "4":
        resultado = console.log(calcularAreaDoTrapezio())
        break
    case "5":
        resultado = console.log(calcularAreaDoTriangulo())
        break
}



