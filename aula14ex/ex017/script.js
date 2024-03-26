function gerarTabuada() {
    var num = window.document.getElementById('numero')
    var numero = Number(num.value)

    var tabuada = window.document.getElementById('tabuada')
    tabuada.innerHTML = '<option value="0">Digite um número acima</option>'

    if (numero != '') {
        tabuada.innerHTML = ''
        
        for (c=1;c<=10;c+=1) {
            var opt = window.document.createElement('option')
            opt.setAttribute('value', tabuada.children.length)
    
            opt.innerHTML = `${numero} X ${c} = ${numero*c}`
            tabuada.appendChild(opt)
        }
    }
}