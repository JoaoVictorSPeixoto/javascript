var time = new Date()
var hora = time.getHours()

console.log(`Agora são ${hora} horas`)

if( hora > 00 && hora < 5){
    console.log('boa madrugada')
}else if(hora < 12){
    console.log('bom dia')
}else if(hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}