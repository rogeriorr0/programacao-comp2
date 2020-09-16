function principal(){
    
    let matriz = [] // pontos do time em cada jogo 
    let vetor = [] // os times
    cadastra(matriz, vetor)
    calculaMediaPontos(matriz, vetor)
    timeMaisPontosRodada(matriz, vetor)
}

function cadastra(mat, vet){
    for (let i = 0; i < 4; i++){ // para cada time
         let obj = new Object
         obj.nome = prompt(`Informe o nome do time`)
         obj.cidade = prompt(`Informe a cidade do time`)
         obj.mediaPontos = 0
         // insere o time no vetor
         vet.push(obj)
         // insere os pontos
         mat[i]= [] // cria o vetor dentro da matriz
         for(let j= 0; j < 3; j++){
             mat[i][j]= Number(prompt(`Pontos do jogo ${j+1}`))
         }
    }
}

function calculaMediaPontos(mat, vet){
    for (let i = 0; i < 4; i++){ // para cada time
        for(let j= 0; j < 3; j++){ // para cada rodada
            vet[i].mediaPontos = vet[i].mediaPontos + mat[i][j]
        }
        vet[i].mediaPontos = vet[i].mediaPontos / 3
    }
    console.log(`A média dos pontos dos times`)
    console.log(vet)
}

function timeMaisPontosRodada(mat, vet){
    for(let j= 0; j < 3; j++){ // para cada rodada
        maisPontos = mat[0][j] // PRIMEIRO TIME FEZ MAIS PONTOS
        nomeTime = vet[0].nome // PRIMEIRO TIME FEZ MAIS PONTOS
        for(let i=0; i < 4; i++){
            if(mat[i][j] > maisPontos ){
               maisPontos = mat[i][j] // ATUALIZAR MAIORPONTOS
               nomeTime = vet[i].nome // ATUALIZAR NOME 
            }
        }
        // verificou- se a rodada
        console.log(`Na roda ${j+1} o time ${nomeTime} fez ${maisPontos} pontos`)   
    }
}

principal()