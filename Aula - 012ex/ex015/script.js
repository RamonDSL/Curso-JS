function Verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('ano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       let fsex = document.getElementsByName('radsex')
       let idade = ano - Number(fano.value)
       let gênero = ''
       let img = document.createElement('img')
       img.setAttribute('id', 'foto') //pesquisar

       if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebê-homem.jpg')
            } else if (idade < 23) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
       } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebê-mulher.jpg')
            } else if (idade < 23){
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-mulher.jpg')
            }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}