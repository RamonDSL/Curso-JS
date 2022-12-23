/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

// **********************

var cont = 1

while (cont <= 500) { // faz um teste lógico 1º e depois executa uma ação
    console.log(`Passo ${cont}`);
    if (cont === 300) {
        console.log('CHEGA!!');
        break
    }
    cont++ // cont = cont + 1
}
// **********************

var cont = 1

do { // executa uma ação primeiro depois faz um teste lógico para ver se deve repetir a ação
    console.log(`Passo ${cont}`);
    cont++
} while (cont <= 500)