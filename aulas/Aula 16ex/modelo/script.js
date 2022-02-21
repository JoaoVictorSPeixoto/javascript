let vetor = [], cont = 0

function Adicionar(){
    let n = document.querySelector('input#txtn')


    if(n.value.length == 0){
        alert('Por favor digite um número!')
    }else{
        if(n.value < 1 || n.value > 100){
            alert('Número invalido!')
        }else{
            let select = document.getElementById('listn')
            let op = document.createElement('option')
            op.value = `Num${n.value}`
            op.text = `Numero ${n.value} adicionado`
            
            if(vetor.indexOf(Number(n.value)) == -1){
                cont = 1
                vetor.push(Number(n.value))
                select.appendChild(op)
                let r = document.getElementById('res')
                r.innerHTML = ''
            }else{
                alert('Valor já adicionado')
            }
            
        }
    }
    n.value = ''
    n.focus()
}

function Analizar(){
    let result = document.getElementById('res')
    if(cont == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let res = 0
        let maior = vetor[0]
        let menor = vetor[0]

        for(let i in vetor){
            if(maior < vetor[i]){
                maior = vetor[i]
            }

            if(menor > vetor[i]){
                menor = vetor[i]
            }
        }

        result.innerHTML = `<p> Temos um total de ${vetor.length} 
        número(s) cadastrado(s)</p>`

        result.innerHTML += `<p>O maior valor digitado é: ${maior}</p>`

        result.innerHTML += `<p>O menor valor digitado é: ${menor}</p>`

        for(let i = 0; i < vetor.length; i++){
            res += Number(vetor[i])
        }
        result.innerHTML += `<p>A soma de todos os valore digitados é: ${res}</p>`

        result.innerHTML += `<p>A media dos valores digitado é: 
        ${res / vetor.length}</p>`



    }
    
}