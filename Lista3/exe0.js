chefe()

function chefe(){
    // criar matriz - 3 x 4 - 3 alunos e 4 notas cada
    let matriz = [] // uma matriz de notas
    let vetor = [] // vetor de alunos
    cadastra(matriz, vetor) // passamos a matriz de notas e o veto de alunos
    calculaMedia(matriz, vetor)
    calculaMaiorNotaProva(matriz, vetor)
    calculaMenorNotaAluno(matriz, vetor)

}
function cadastra(mat, vet){ // quando alteramos mat, alteramos a matriz
    for(let i = 0; i < 3; i++){ // são 3 alunos
        // informar os dados do aluno
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do aluno`)
        obj.codigo = Number(prompt(`Informe o código do aluno`))
        obj.media = 0
        // insere o aluno no vetor
        vet.push(obj)
        alert(`Informe 4 notas para o aluno ${i+1}`)
        // criamos um vetor dentro da matriz
        mat[i]= []
        for(let j = 0; j < 4; j++){ // são 4 notas
            mat[i][j] = Number(prompt(`Nota ${j+1}`))
        }
    }
}

function calculaMenorNotaAluno(mat, vet){
    for(let i=0;i<3;i++) {// para cada aluno
        let menorNota = mat[i][0] // menor nota é a primeira
        for(let j=0;j<4;j++) {// para cada nota
           if (mat[i][j] < menorNota){// observar a sintaxe
               menorNota = mat[i][j]
           } 
        }      
      console.log(`O aluno ${vet[i].nome} tem a menor nota ${menorNota}`)
    }
}

function calculaMaiorNotaProva(mat, vet){
    for( let j = 0; j < 4; j++){ // para cada prova
        let maiorNota = mat[0][j] // assumimos que o primeiro aluno tem a maior nota
        let nomeMaior = vet[0].nome // assumimos que o primeiro aluno tem a maior nota
        for(let i = 0; i < 3; i++){ // para cada aluno
            if(mat[i][j] > maiorNota){
                maiorNota = mat[i][j] // atualiza a maior nota
                nomeMaior = vet[i].nome
            }
        }
        console.log(`Aluno com maior nota na prova ${j} foi ${nomeMaior} com nota ${maiorNota}`)
    }
}

function calculaMedia(mat, vet){
    // vamos usar um vetor auxiliar
    for(let i=0;i<3;i++) {// para cada aluno
        for(let j=0;j<4;j++) {// para cada nota
           vet[i].media = vet[i].media + mat[i][j] // observar a sintaxe
        }
        // quando acabarem as notas
        vet[i].media = vet[i].media / 4
    }

    console.log(`A média dos alunos `)
    console.log(vet)
   
}

//Exe1 Antes do cadastro das notas, solicitar também o nome do aluno para cadastro, criar outro vetor para colocar o nome do aluno
//Exe2 Calcular a maior nota em cadas prova e quem tirou essa nota
//Exe3 menor nota de cada aluno