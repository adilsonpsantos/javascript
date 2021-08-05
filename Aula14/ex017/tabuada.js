function tabuada() {
    //var num = window.document.getElementById('num').value
    //var sel = document.getElementById('tabuada')

    var num = document.getElementById('num')
    var res = document.querySelector('div#res')
    var tab = document.getElementById('tabuada')
    //res.innerHTML = ''
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        tab.innerHTML = ''
        for ( var i = 1; i <= 10; i++) {
            n = Number(num.value)
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i} `
            item.value = `tab${i}`
            tab.appendChild(item)
        }
        
    }
}