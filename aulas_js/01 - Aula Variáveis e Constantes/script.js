/*
no final de cada comando tem que por ;(ponto e vírgula)
console.log("") para aparecer mensagens no console
console.log("Olá, Mundo!");

= - receba
== - igual 

A principal diferença são as regras de escopo. Variáveis ​​declaradas por varpalavra-chave são delimitadas para o corpo imediato da função (daí o escopo da função), enquanto letas variáveis ​​são delimitadas para o bloco delimitador imediato indicado por { }(daí o escopo do bloco).

let - not allowed to be globally scoped
var - globally scoped

var(cria a variável) nome(nome da variável) = recebe;
var box1 = 5;
var box2 = 7;
var box3 = box1 + box2;
console.log(box3)

Aparecer mensagem na tela window(janela).alert(alerta)("")
window.alert("Olá, Mundo!");*/

/*
window.prompt("") - entrada de dados pelo usuário
var nome = window.prompt("Digite o seu nome: ");
console.log("Seja bem vindo " + nome);
window.alert("Seja bem vindo " + nome);

parseInt, parseFloat converter string em inteiro e float respectivamente
var num1 = parseInt(window.prompt("Digite um número: "));
var num2 = parseInt(window.prompt("Digite outro número: "));

if (condição){função} else if (condição){função} else{};
*/

/*function(criar uma função) nome da função() {corpo da função}*/
function calculadora(){
    var num1 = parseInt(window.prompt("Digite um número para somar: "));
    var num2 = parseInt(window.prompt("Digit outro número para somar: "));
    var num3 = parseInt(window.prompt("Digite o último número para subtrair: "));
    
    var total = num1 + num2 - num3;
    
    window.alert("O resultado foi de " + total);    
}
