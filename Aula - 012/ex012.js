var agora = new Date() // ao fim de cada case por um break se não vai dar merdar
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`);
if (hora < 12) {
    console.log('Bom Dia!');
} else if (hora <= 18){
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite');
}
