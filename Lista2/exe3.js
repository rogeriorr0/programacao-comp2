
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

}
function requisito2(vet){

}
function requisito3(vet){

}
function requisito4(vet){

}
function requisito5(vet){

}
