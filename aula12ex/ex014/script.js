
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        window.document.body.style.background = '#e9c46a'
        // BOM DIA
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        window.document.body.style.background = '#e76f51'
        // BOA TARDE
    } else {
        img.src = 'fotonoite.jpg'
        window.document.body.style.background = '#14213d'
        //BOA NOITE
    }
}

/*
    #e9c46a
    #e76f51
    #14213d
*/