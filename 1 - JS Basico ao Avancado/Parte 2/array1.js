const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//adicionar no final do Array 
//push


arr.push("Eae")

console.log(arr)


//adicionar no começo do Array 
//unshift

arr.unshift("Eae")

console.log(arr)

//remover no final do Array 
//pop

arr.pop()

console.log(arr)

//remover no comeco do Array 
//shif

arr.shift()

console.log(arr)


//Pesquisar por um elemento
//Includes

const inclui = arr.includes("Sam")
console.log(inclui)

//Para saber qual o indice desse elemento 
//IndexOff

const indice = arr.indexOf("Sam")
console.log(indice)


//Cortar e Concatenar 
//Slice

const hobbits = arr.slice(1,4)
console.log(hobbits)













