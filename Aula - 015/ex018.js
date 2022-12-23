var num = [5, 8, 2]
num[3] = 6 // JS cria um espaço automaticamente se atribuir um valor a um índice que não existe 
num.push(0) //adicionar na ultima posição
//num.length para saber o comprimento do array
//num.sort() coloca na ordem crescente

console.log(`O vetor tem ${num.length} posições`);
console.log(num[4]);
num.push('teste')
console.log(num);
