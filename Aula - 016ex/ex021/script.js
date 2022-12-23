var valores = []

// Eventos 
function Adicionar() {
    let num = document.querySelector('input#num')
    let lista = document.getElementById('lista')
    let res = document.getElementById('res')

    if (num.value.length == 0 || ValidaDado(num)) {
        alert('Valor Invalido ou já adicionado!')
    } else {
        AdicionaValor(num)        
    }
}

function Consultar() {
    let res = document.getElementById('res')

    if (lista.length == 0) {
        alert('Adicione valores antes de consultar')
    } else {
        valores.sort()
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')        
        
        var resultados = Resultado()

        p1.innerHTML = `O total de valores digitados foi ${valores.length}`
        p2.innerHTML = `O Maior valor cadastrado foi ${resultados[1]}`
        p3.innerHTML = `O Menor valor cadastrado foi ${resultados[2]}`
        p4.innerHTML = `A soma de todos os valores foi ${resultados[0]}`
        p5.innerHTML = `A média dos valores foi ${resultados[0]/valores.length}`

        res.append(p1, p2, p3, p4, p5)
    }
    
}


//Funções Secundarias
function ValidaDado(num) {

    if (valores.indexOf(Number(num.value)) != -1 || Number(num.value) > 100 || Number(num.value) < 1) {
        return true
    } else { return false}
}

function AdicionaValor(num) {
    valores.push(Number(num.value))
    let opt = document.createElement('option')
    opt.innerHTML = `Valor ${num.value} adicionado`
    opt.setAttribute('value', Number(num.value))
    lista.appendChild(opt)
    
    num.value = ""
    num.focus() // como se tivesse clicado no input para escrever
    res.innerHTML = ""
}

function Resultado() {
    let max = valores[0]
    let min = valores[0]
    let soma = 0

    for (let val in valores) {
        soma += valores[val]
        if (max < valores[val]) {
            max = valores[val]
        }
        if (min > valores[val]) {
            min = valores[val]
        }
    }
    return [soma, max, min]
}