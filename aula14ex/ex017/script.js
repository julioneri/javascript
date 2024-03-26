function gerarTabuada() {
    let num = window.document.getElementById('numero')
    let tab = window.document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        tab.size = '10'
        c = 1
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        /*
        for (c = 1; c <= 10; c++) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        */
    }
}