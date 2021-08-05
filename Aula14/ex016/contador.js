function contar() {

    var inicio  = window.document.getElementById('inicio').value
    var fim     = window.document.getElementById('fim').value
    var passo   = window.document.getElementById('passo').value
    var saida   = window.document.querySelector('div#saida')
    var c

    if (inicio.length == 0) {
        inicio = 1
    } 

    if (passo.length == 0) {
        passo = 1
    }

    if (fim.length == 0) {
        window.alert("[ERRO] Informe ao menos o valor final da contagem")

    } else if (Number(passo) <= 0) {
        window.alert("[ERRO] O valor do passo deve ser maior que zero")   

    } else {
        saida.innerHTML = 'Contando: '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (i < f) {
            for ( let c = i; c <= f; c += p){
                //console.log(c)
                //  Google: unicode emoji list
                saida.innerHTML += `${c} \u{1F449} `
            }
            saida.innerHTML += `\u{1F3C1}`

        } else {
            for ( let c = i; c >= f; c -= p){
                //console.log(c)
                //  Google: unicode emoji list
                saida.innerHTML += `${c} \u{1F449} `
            }
            saida.innerHTML += `\u{1F3C1}`
        }
    }
    /*
    
    */
}