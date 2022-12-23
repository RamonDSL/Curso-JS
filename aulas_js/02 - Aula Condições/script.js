/*
 && -> E
 || -> OU
 ! -> NOT
 == -> IGUAL
 != -> DIFERENTE
 ++ -> variável = variável + 1
 Se usado postfix, com operador após operando (por exemplo, x++), o operador de incremento incrementa e retorna o valor antes de incrementar.

Se usado prefixo, com operador antes do operando (por exemplo, ++x), o operador de incremento incrementa e retorna o valor após o incremento.
*/


const resultado = document.getElementById("resultado");

function perguntaidade() {
    // if (condição) {código}else{}
    // if (condição ||(ou) condição) / if (condição &&(e) condição)
    var idade = parseInt(window.prompt("Digite a sua idade: "));

    if (idade >= 65){
        resultado.innerHTML = "Você tem " + idade + ". você está velho."
    }else if (idade >= 18){
        resultado.innerHTML = "Você tem " + idade + ". Você está começando a ficar velho."
    }else {
        resultado.innerHTML = "Você tem " + idade + ". Você é novo."
    };    
    console.log(typeof(idade));
};