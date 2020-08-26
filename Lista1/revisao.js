function revisao() {
    // criação do vetor
    var bikes = []
    do { 
        // cria um bike
        var bike = new Object()
        bike.modelo = prompt(`Informe modelo da bike`)
        bike.marca = prompt(`Informe a marca da bike`)
        bike.aro = Number(prompt(`Informe aro da bike`))
        bike.roda = Number(prompt(`Informe roda da bike`))
        var data = prompt(`Informe a data de fabricação da bike`).split("/")
        bike.fabricacao = new Date(data[2], data[1]-1, data[0])
        // insere bike em bikes
        bikes.push(bike)
        // quer continuar
        var resposta = prompt(`Quer cadastrar uma nova bike (s/n) ?`)

    }
    while (resposta != 'n')

    // calcula a média dos tamanhos dos aros da bicicletas
    var soma = 0
    for(var i=0; i < bikes.length; i++){
        soma = soma + bikes[i].aro
    }
    console.log(`A média dos aros é ${soma/bikes.length}`)

    // calcula a marca da bike com maior roda
    var maiorRoda = bikes[0].roda
    var maiorMarca = bikes[0].marca
    for ( var i=0; i < bikes.length; i++){
        if( bikes[i].roda > maiorRoda){
            maiorRoda = bikes[i].roda
            maiorMarca = bikes[i].marca
        }
    }
    console.log(`A marca da bike com maior roda é ${maiorMarca}`)

    // calcula as bikes que estão em um intervalo de data de fabricação
   var dI = prompt(`Informe data inicial`).split('/')
   var dataI = new Date(dI[2], dI[1]-1, dI[0])
   var dF = prompt(`Informe data final`).split('/')
   var dataF = new Date(dF[2], dF[1]-1, dF[0])

   for (var i=0; i < bikes.length; i++){
       if (bikes[i].fabricacao >= dI && bikes[i].fabricacao <= dataF)
       console.log(bikes[i])
   }


}

