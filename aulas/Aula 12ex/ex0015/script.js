function Verificar(){
    var data = new Date()
    var ano = data.getFullYear();
    var anoDigitado = document.getElementById('txtano')

    if(anoDigitado.value < 0 || anoDigitado.value > ano){
        alert('[ERRO] Verfique os dados digitados')
    }else{ 

        var res = document.querySelector('div#res')
        
        var test = document.getElementsByName('radsex')
        var idade = ano - Number(anoDigitado.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(test[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','foto-bebe-m.jpg')
            }else if(idade <= 21){
                img.setAttribute('src','foto-jovem-m.jpeg')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulto-m.jpeg')
            }else if(idade < 2022){
                img.setAttribute('src','foto-idoso-m.jpeg')
            }else{
                img.setAttribute('src','jesus.jpg')
            }
        }else if(test[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','foto-bebe-f.jpeg')
            }else if(idade <= 21){
                img.setAttribute('src','foto-jovem-f.jpeg')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulto-f.jpeg')
            }else{
                img.setAttribute('src','foto-idoso-f.jpeg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
        

    }
   


}