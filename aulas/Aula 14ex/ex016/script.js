function Contar(){

    var ini = document.querySelector('input#txtini')
    var V_ini = Number(ini.value)

    var fim = document.querySelector('input#txtfim')
    var V_fim = Number(fim.value)

    var pas = document.querySelector('input#txtpas')
    var V_pas = Number(pas.value)

    var cont = document.querySelector('div#contando')
    



    if(ini.value.length != 0 && fim.value.length != 0 && pas.value.length != 0){
        if(V_pas > 0){
            cont.innerHTML = '<p> Contando:</p>'
            if(V_ini < V_fim){
                for(var i = V_ini; i <= V_fim; i += V_pas){
                    cont.innerHTML += `${i} \u{1F449}`
                }
                cont.innerHTML += ` \u{1F3C1}`
            }else{
                cont.innerHTML = '<p> Contando:</p>'
                for(var i = V_ini; i >= V_fim; i -= V_pas){
                    cont.innerHTML += `${i} \u{1F449}`
                }
                cont.innerHTML += ` \u{1F3C1}`
            }
            

        }else{
            window.alert('O valor do passo NÃO pode ser menor ou igual a 0, assumindo valor1')
            cont.innerHTML = '<p> Contando:</p>'
            if(V_ini < V_fim){
                for(var i = V_ini; i <= V_fim; i++){
                    cont.innerHTML += `${i} \u{1F449}`
                }
                cont.innerHTML += ` \u{1F3C1}`
            }else{
                cont.innerHTML = '<p> Contando:</p>'
                for(var i = V_ini; i >= V_fim; i--){
                    cont.innerHTML += `${i} \u{1F449}`
                }
                cont.innerHTML += ` \u{1F3C1}`
            }
        }
          
    }else{
        window.alert('Porfavor preencha todos os campos')
        cont.innerHTML = 'Impossivel contar!'
    }
    

    

    


}