function carregar(){

    var time = new Date()
    var hora = 3//time.getHours()
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')


    msg.innerHTML = `Agora são ${hora} horas`

    if(hora > 0 && hora < 12){
        img.src = '../imagens/manhafoto.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora <= 18){
        img.src = '../imagens/tardefoto.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src ='../imagens/noitefoto.png'
        document.body.style.background = '#515154'
    }

}