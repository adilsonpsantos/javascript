function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        //window.alert('Tudo OK')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var desc = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //  criança
                desc = 'criança'
                img.setAttribute('src','imagens/crianca_m.png')
            } else if (idade >= 10 && idade < 22) {
                //  jovem
                desc = 'jovem'
                img.setAttribute('src','imagens/jovem_m.png')
            } else if (idade >= 22 && idade < 60) {
                //  adulto
                desc = 'adulto'
                img.setAttribute('src','imagens/adulto.png')
            } else {
                //  idoso
                desc = 'idoso'
                img.setAttribute('src','imagens/idoso_m.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //  criança
                desc = 'criança'
                img.setAttribute('src','imagens/crianca_f.png')
            } else if (idade >= 10 && idade < 22) {
                //  jovem
                desc = 'jovem'
                img.setAttribute('src','imagens/jovem_f.png')
            } else if (idade >= 22 && idade < 60) {
                //  adulto
                desc = 'adulto'
                img.setAttribute('src','imagens/adulto.png')
            } else {
                //  idoso
                desc = 'idosa'
                img.setAttribute('src','imagens/idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${desc} com ${idade} anos.`
        res.appendChild(img)
    }
    
}