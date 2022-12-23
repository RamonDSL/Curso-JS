var agora = new Date()
var diaSem = agora.getDay()
// o switch é muito bom para valores pontuais o if é bom para testar intervalos 
// o break é importante pq se não ele vai ficar executando até o ultimo case, logo o ultimo break no default é opcional pois não tem nada para executar
switch (diaSem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    default:
        console.log('Sabado');
        break;
}
/*
    Domingo - 0
    Segunda - 1
    Terça - 2
    Quarta - 3
    Quinta - 4
    Sexta - 5
    Sabado - 6
*/