// vetor ou array que contém as frutas digitadas pelo usuário
const frutas = [];

// div onde aparecerar o que o usuário digitou
const resultado = document.getElementById("resultado");

// recebe o valor digitado pelo usuário que será adicionado as frutas
var fruta;

// irá determinar quando parar o loop
var sair = false;

function mostrafrutas() {
    while (sair == false) {
        //perguntar para o usuário qual fruta adicionar
        fruta = prompt("Digite uma fruta");

        //colocando o valor digitado pelo usuário no Vetor ou array
        frutas.push(fruta);
        // perguntar para o usuário se ele quer continuar
        var resp = prompt('Quer sair? [s/n]');
        // se a resposta for s encerrar o loop
        if (resp == 's') {
            sair = true;
        }        
    }

    //resetar a variável
    sair = false;

    // escrever na tela as frutas digitas pelo
    resultado.innerHTML = 'As frutas digitadas foram: ' + frutas;
}