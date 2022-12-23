function Calcular() {

    let num = document.querySelector('input#num')
    let lista = document.getElementById('lista')
    
    if (num.value.length == 0) {
        alert('[Erro] Digite um número válido!')
    } else {
        /* 1ºForma:
        num = Number(num.value)

        lista.innerText/HTML = ""  limpar todos os filhos
        for (let c = 1; c <= 10; c++) {
              let opc = document.createElement('option')

              opc.setAttribute('value', `${num*c}`)
              opc.innerHTML += `${num} x ${c} = ${(num*c)}`
              
              lista.appendChild(opc)
          }
        */ 
        num = Number(num.value)

        if (lista.childElementCount == 1) {
          lista.removeChild(lista.children[0])
          for (let c = 1; c <= 10; c++) {
              let opc = document.createElement('option')
              if (Number.isInteger(num)) {
                opc.setAttribute('value', `${c}`)
                opc.text += `${num} x ${c} = ${(num*c)}`
              } else {
                opc.setAttribute('value', `${(num*c).toFixed(2)}`)
                opc.innerHTML += `${num} x ${c} = ${(num*c).toFixed(2)}`
              }
              lista.appendChild(opc)
          }
        } else {
            for (let c = 1; c <= 10; c++) {
              let opc = document.createElement('option')
              if (Number.isInteger(num)) {
                opc.setAttribute('value', `${c}`)
                opc.innerHTML += `${num} x ${c} = ${num*c}`
              } else {
                opc.setAttribute('value', `${(num*c).toFixed(2)}`)
                opc.innerHTML += `${num} x ${c} = ${(num*c).toFixed(2)}`
              }
              lista.replaceChild(opc, lista.children[c-1])
          }
        }
    }
    
}

/*
childNodes - retorna uma NodeList dos elementos filhos.
childElementCount - retorna a quantidade de filhos que aquele elemento possui
children - retorna um vetor com os elementos filhos

//console.log(lista.childElementCount)
    //console.log(lista.children)

var el = document.getElementById('elem');

alert(el.parentElement.id);
alert(el.children[0].id);

<ul id="pai">
  <li id="elem">
    <div id="filho">Item</div>
  </li>
</ul>
*/