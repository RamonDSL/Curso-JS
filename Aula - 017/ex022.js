let amigo = {
nome:'Lucas',
idade:'19',
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log('Engordou');
    this.peso += p
}
} // objeto

console.log(`${amigo.nome} pesa ${amigo.peso}`);
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`);
console.log(amigo);