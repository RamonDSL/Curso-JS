/*
document.writeln("Repetiu<br>") para escrever na tela da para por tags nele
ao em vez de colocar while (voltas < repete + 1) pode por (voltas <= repete) que funciona do mesmo jeito
for ( x = 1; x < repete; x++){}
*/


var voltas = 1;
var texto = window.prompt("Qual o texto que você deseja repetir: ");
var repete = parseInt(window.prompt("Quantas vezes você quer que repita: "));

while (voltas <= repete) {
    document.writeln("<p>" + voltas + " - <span>" + texto + "</span></p>");
    voltas++
};

/* while (volta != 11) {
     console.log("Repetiu! " + volta + "º")
     document.writeln("<p><strong>Repetiu</strong></p>")
    volta++;
};*/

