let valores = [8, 1, 7, 4, 2, 9]
/*
console.log('Menos simples');
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`);
}

console.log('Modo mais simples');
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`);
}


for (let/var/const nome in array) {

} forma de se ler: Para cada valor(ele da o índice do valor) no array faça

Para buscar um valor no array use o método indexOf(número/ valor presente no array) ele retornara o índice onde está contido o valor
valores.indexOf(número)
se colocar para buscar um valor que não está contido no array o JS  irá devolter o valor -1, que signfica que ele procurou e não achou nenhuma ocorrência
*/

let pos = valores.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`);

pos = valores.indexOf(19)
if (pos === -1) {
    console.log(`O valor 19 não foi encontrado`);    
}
