let num = [5,9,3,6]
console.log(`Nosso vetor é`)
console.log(num)

num.push(1)
num.sort();

console.log(`Nosso vetor ordenado e com o numero 1 adicionado:`)
console.log(num)

let result = num.indexOf(30)

if(result == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O Valor 3 está na posição ${result}`)
}