function verificar() {
    var data = new Date() // hora atual
    var ano = data.getFullYear() //ano atual com 4 digitos, por isso fuulyear
    var fano = window.document.getElementById('txtano') // refernte ao id txt ano do html na caixa de texto
    var res = window.document.querySelector('div#res')// da na mesma, só muda a forma // res do html da outra div
    if (fano.value.length == 0 || Number(fano.value) > ano) { //ano tem que ser maior que zero e menor que ano atual...
        window.alert('Verifique os dados e tente novamente sua ANTA')
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos`
        var gênero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto') //é a mesma coisa que criar a div com id foto do html, porem pelo JS
        if (fsex[0].checked){ // 0 é a primeira bolinha e 1 a segundo
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebehomem.jpg')
            } else if ( idade >=10 && idade < 21){ // não precisa do >=10 pq ja esta definido acima
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
            
        } else if (fsex[1].checked) {// checked para usar na que foi selecionada
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemulher.jpg')
            } else if ( idade >=10 && idade < 21){ // não precisa do >=10 pq ja esta definido acima
                //jovem
                img.setAttribute('src','jovemmulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else {
                //idoso
                img.setAttribute('src','idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p> Detectamos ${gênero} com ${idade} anos.</p>`// usadno o <p> para enquadrar a foto no meio
        res.appendChild(img)
    }
}