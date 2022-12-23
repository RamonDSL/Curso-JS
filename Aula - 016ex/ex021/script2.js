var valores = []
function Adicionar() {
    let num = document.querySelector('input#num')
    let lista = document.getElementById('lista')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('Digite um valor')
    } else if (num.value < 1 || num.value > 100) {
        alert('Digite um número entre 1 e 100')
    } else if (valores.indexOf(Number(num.value)) != -1) {
        alert('Valor já adicionado a lista')
    } else {
        num = Number(num.value)
        valores.push(num)
        let opt = document.createElement('option')
        opt.innerHTML = `Valor ${num} adicionado`
        opt.setAttribute('value', num)
        lista.appendChild(opt)

        res.innerHTML = ""
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

        p1.innerHTML = `O total de valores digitados foi ${valores.length}`
        p2.innerHTML = `O Maior valor cadastrado foi ${max}`
        p3.innerHTML = `O Menor valor cadastrado foi ${min}`
        p4.innerHTML = `A soma de todos os valores foi ${soma}`
        p5.innerHTML = `A média dos valores foi ${soma/valores.length}`

        res.append(p1, p2, p3, p4, p5)
    }
    
}

