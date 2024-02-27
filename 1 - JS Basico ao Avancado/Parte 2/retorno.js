function calcularMedia(a, b){
    const media =(a + b)/2

    return media
}

const resultado = calcularMedia(10,2)


console.log(resultado)



function criarProduto(nome,preco){
    const produto = {
        nome, 
        preco, 
        estoque: 1
    }

    return produto
}


const notebook = criarProduto("Dell", 15000)

console.log(notebook)


function areaDoRetangulo(base, altura){
    const area = base * altura

    return area
}   


function areaQuadrada(lado){
    return areaDoRetangulo(lado, lado)
}

console.log(areaQuadrada(9))

function ola(){
    
}