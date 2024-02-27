const palavra = prompt("Digite a palavra ")
let palavraInvertida = ""

for(let i = palavra.length -1;i>=0; i--){

    palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
    alert("Palindromo")
}else{
    alert("deu errado o palindromo")
}