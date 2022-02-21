function Tabuada() {
    let  num  = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    
    if(num.value.length == 0){
        alert('Porfavor digite um numero!')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
        

    }
   
}