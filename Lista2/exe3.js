
chefe()

function chefe(){
    var vetor = [] // escopo global - ele que iremos passar nos parâmetros da função

    do {

        var opcao = Number(prompt(`Digite [1]. Req1 [2]. Req2 [3]. Req3 [4]. Req4 [5]. Req5`))
        switch(opcao){
            case 1: requisito1(vetor)
                    break
            case 2: requisito2(vetor)
                    break
            case 3: requisito3(vetor)
                    break
            case 4: requisito4(vetor)
                    break
            case 5: requisito5(vetor)
                    break
            case 6: console.log(`Programa vai ser encerrado`)
        }
    }
    while (opcao != 6)  
}

// todos vet aponta para vetor
function requisito1(vet){
    var objeto = new Object()
    objeto.sexo = prompt(`Informe M ou F`).toUpperCase()
    objeto.altura = Number(prompt(`Informe altura`))
    objeto.idade = Number(prompt(`Informe sua idade`))
    objeto.olhos = prompt(`Informe a cor dos olhos - A - azul V - verde C - castanho`).toUpperCase()
    // insere no vetor
    vet.push(objeto) // insere no vetor - escopo global
    console.log(`Habitante cadastrado com sucesso`)
}
function requisito2(vet){
    var soma = 0
    var qtde = 0
    for(var i = 0; i < vet.length; i++){
        if ((vet[i].olhos == 'C') && (vet[i].altura > 1.60)){
            soma = soma + vet[i].idade
            qtde++
        }
    }
    if (qtde != 0)
        console.log(`A média é ${soma / qtde}`)
        else console.log(`Não existe habitante para este cálculo`)

}
function requisito3(vet){
    var maiorIdade = vet[0].idade
    for(var i =1; i < vet.length; i++){
         if (vet[i].idade > maiorIdade)
            maiorIdade = vet[i].idade
    }
    console.log(`A maior idade dos habitantes é ${maiorIdade}`)
}
function requisito4(vet){
    var qtde = 0
    for(var i = 0; vet.length; i++){
        if (((vet[i].sexo == "f") && (vet[i].idade >= 20) && (vet[i].idade <= 45))
        || 
        (vet[i].olhos == "V") && (vet[i].altura < 1.70)){
            qtde++
        }
    }
        console.log(qtde)

}
function requisito5(vet){
    var qtde = 0
    for(var i = 0; vet.length; i++){
        if (vet[i].sexo == "M"){
            qtde++
        }
    }
    console.log(qtde/vet.length*1000)
}
