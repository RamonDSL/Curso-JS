function parimpar(n) {
    if (n%2 == 0) {
        return 'par!'
    } else { 
        return "impar!"
    }
}

/*console.log(parimpar(150))
let res = parimpar(13)

console.log(res);

function Soma(n1=0, n2) {
    return n1 + n2
}

console.log(`A soma entre ${2} e ${5} é ${Soma(2, 5)}`); 

// pode jogar funções dentro de variáveis
let v = function(x) {
    return x*2
}

console.log(v(5));

// func para calcular fatorial
function Fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(Fatorial(5));*/
// função recursiva: quando uma função chama ela mesma
function Fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * Fatorial(n-1)
    }
}

console.log(Fatorial(5));