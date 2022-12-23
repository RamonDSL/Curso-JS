// \u{} - formatação unicode para o js  
function Contar() {
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length ==0) {
        res.innerText = 'Impossível de Calcular...'
    } else {
        ini = Number(ini.value)
        fim = Number(fim.value)
        pas = Number(pas.value)
        
        if (pas <= 0) {
            alert('Passo Invalido! Considerando como 1')
            pas = 1
        }

        res.innerHTML = "Contando: <br>"
        if (ini <= fim) {
            for (; ini <= fim; ini += pas) {
                if (Number.isInteger(ini)) {
                   res.innerHTML += ` ${ini}\u{1f449}`
                } else { res.innerHTML += ` ${ini.toFixed(2)}\u{1f449}`}
            }
        } else {
            for (; ini >= fim; ini -=pas) {
                if (Number.isInteger(ini)) {
                    res.innerHTML += ` ${ini}\u{1f449}`
                } else { res.innerHTML += ` ${ini.toFixed(2)}\u{1f449}`}                
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}