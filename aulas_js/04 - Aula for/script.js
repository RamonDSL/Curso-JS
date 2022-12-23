//inicialização; condição; incremento
var palavra = prompt("O que você quer que repita: ")
var repete = parseInt(prompt("Quantas vezes você quer repetir?"));

/*
document.write("<ol>");
for (var x = 1; x <= repete; x++) {
        document.write("<li> " + palavra + "</li>")
};
document.write("</ol>");
*/

document.write("<table>");
for (var y = 1; y <= repete; y++){
    document.write("<tr>");
    for (var x = 1; x <= repete; x++) {
            document.write("<td> " + palavra + "</td>")
    };
    document.write("</tr>");
};
document.write("</table>");

/*
for (var y = 1; y <= repete; y++) {
    for (var x = 1; x <= repete; x++) {
        document.write(y + " " + x + "<br>")
    };
};*/


/*frutas.forEach(fruta => {
    document.write('<p>' + fruta + '</p>')
});*/


var frutas = ['uva ', 'laranja ', 'maçã ', 'banana ',];
var sair = false;
const resultado = document.getElementById("resultado");



function mostrafrutas() {  
    sair = false
    while (sair == false) {
        var fruta = prompt('Qual fruta você quer adicionar? ');
        frutas.push(fruta);
        var resp = prompt('Quer continuar? [s/n]');
        if (resp == 'n') {
            sair = true;
        }
    };
      
    resultado.innerHTML = frutas
}