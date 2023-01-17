function carregar() {
    msg = window.document.getElementById(`msg`)
    img = window.document.getElementById(`imagem`)
    data = new Date() 
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
         // bom dia
         img.src = 'fotomanha.jpg'
         document.body.style.background= 'yellow'
    } else if (hora >=12 && hora <= 18) {
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background= 'orange'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'black'
    }
}
 