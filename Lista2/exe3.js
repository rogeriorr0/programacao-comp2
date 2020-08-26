
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
            case 6: console.log(`Opção inválida`)
        }
    }
    while (opcao != 6)  
}

// todos vet aponta para vetor
function requisito1(vet){
    var objeto = new Object()
    objeto.sexo = prompt(`Informe M ou F`)
    objeto.altura = Number(prompt(`Informe altura`))
    objeto.idade = Number(prompt(`Informe sua idade`))
    objeto.olhos = prompt(`Informe a cor dos olhos - A - azul V - verde C - castanho`)
    // insere no vetor
    vet.push(objeto) // insere no vetor - escopo global
    console.log(`Habitante cadastrado com sucesso`)
}
function requisito2(vet){

}
function requisito3(vet){

}
function requisito4(vet){

}
function requisito5(vet){

}
