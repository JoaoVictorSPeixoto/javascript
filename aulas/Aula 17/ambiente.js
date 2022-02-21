let amigo  = {
    nome: 'José',
    sexo: 'M',
    peso: 80.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += 2
    }
}
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)