function exe1(n){
    var soma = 0
    for(var i = 1; i <= n; i++){
        soma = soma + 1
    }
    return soma
}

function chefe(){
  var nro = Number(prompt(`Informe um número`))
  var result = exe1(nro)
  console.log(`A soma dos número é ${result}`)
}
chefe()


//exercício 2
function exe2(hrs, mns, seg){
   var soma = 0
   var somaH = hrs * 3600
   var somaMns = mns * 60
   soma = soma + somaH + somaMns + seg
   return soma

}
function chefe(){
    var hrs = Number(prompt(`Informe as horas`))
    var mns = Number(prompt(`Informe os minutos`))
    var seg = Number(prompt(`Informe os segundos`))
    var result = exe2(hrs, mns, seg)
    console.log(`${hrs}hrs, ${mns} mns e ${seg} correspondem a um total de ${result}segundos`)
}
chefe()


// exercício 3
function exe3(palavra1, palavra2){
    if (palavra1 == palavra2){
        return 0
    }
    else{
        if(palavra2.length > palavra1.length){
            return palavra1.length + 1
        }
        for (var i=0; i < palavra1.length; i++){
            if(palavra1[i] != palavra2[i]){
                return i+1
            }
        }       
    }
}
function chefe(){
    var palavra1 = prompt(`Informe a primeira palavra`)
    var palavra2 = prompt(`Informe a segunda palavra`)
    var result = exe3(palavra1, palavra2)
    console.log(`O resultado é ${result}`)
}
chefe()


// exercício 4
function exe4(raio){
    var volume = (4/3)
    volume = volume * (raio*raio*raio)
    return volume   
}
function chefe(){
    var raio = Number(prompt(`Informe o raio da esfera`))
    var resultado = exe4(raio)
    console.log(`O volume da esfera é ${resultado}`)
}
chefe()


// exercício 5
function exe5(n1){
    if(n1 > 0){
        return `postivo`
    }
    else if(n1 < 0){
        return `negativo`
    }
    else {
        return `0`
    }   
}
function chefe(){
    var n1 = Number(prompt(`Informe um número`))
    var resultado = exe5(n1)
    console.log(`Número ${resultado}`)
    
}
chefe()


// exercício 6
function exe6(sexo, alt){
    switch(sexo){
        case 'M': return 72.7 * alt - 58
        case 'F': return 62.1 * alt - 44.7
    }
}
function chefe(){
    var alt = prompt(`Informe sua altura`)
    var sexo = prompt(`Informe seu sexo, M para masculino e F para Feminino`)
    var resultado = exe6(sexo, alt)
    console.log(`O seu peso ideal é ${resultado}`)
}
chefe()


// exercício 7
chefe()

function chefe(){
    exe7()
}

function exe7(){
    var soma = 0
    var conta = 0
    var numero = Number(prompt("Informe um número"))
    do {
        conta++ // soma1
        soma = soma + numero
        numero = Number(prompt("Informe outro número. Digite número negativo para encerrar"))
    }
    while(numero >= 0)

    console.log(`A média dos número informados é ${soma / conta} `)
}

// exercício 8
function exe8(numero){
   var soma = 0
   for(var i = 1; i <= numero; i++){
       soma = numero * (numero - 1)
    }
   return soma
}
function chefe(){
    var numero = Number(prompt(`Informe um número inteiro e positivo`))
    var resultado = exe8(numero)
    console.log(`O fatorial desse número é ${resultado}`)
}

//exercício 9
chefe()

function chefe(){
    exe9()
}

function exe9(){
    //entrada de dados
    var soma = 0
    var numero = Number(prompt(`Informe um numero inteiro e positivo`))

    for(var i = numero; i >= 1; i--){
        if (numero % i == 0) {
            soma = soma + i
        }
    }
    console.log(`Soma dos divisores é ${soma}`)
}


//exercício 13
function chefe()

function chefe(){
    //vetor com escopo global -> porque vamos passá-lo como parâmetro nas funções
    var vetor = []
    do{
        var opcao = Number(prompt(`Escolha  \n [1]. Cadastrar  \n [2]. Média dos salários  \n [3]. Menor e maior idade  \n [4].Quatidade de Mulheres  \n [5].Sair do programa`))
        switch(opcao){
             case 1: entrada(vetor)
                    break
            case 2: mediaSalario(vetor)
                    break
            case 3: menorMaiorIdade(vetor)
                    break
            case 4: qtdeMulheres(vetor)
                    break
             case 5: console.log(`Obrigado por utilizar nosso programa`)
                    break 
             default: console.log(`Opção inválida`)
         }
     }

    while (opcao != 5)   
}

function entrada(vet){
    var objeto = new Object() //criamos um objeto
    objeto.salario = Number(prompt(`Informe o sálario`))
    objeto.nroFilhos = Number(prompt(`Informe o número de filhos`))
    objeto.sexo = prompt(`Informe o sexo (M/F)`).toUpperCase() // converte para maiúsculo
    objeto.idade = Number(prompt(`Informe a idade`))
    // insere no vetor
    vet.push(objeto) // insere
}
function mediaSalario(vet){
    if (vet == []){
        console.log(`Nenhum habitante cadastrado`)
    }
    else{
        var soma = 0
        for(var i=0; i < vet.length; i++){ // percorrer o vetor
            soma = soma + vet[i].salario // acumula
        }
        console.log(`A média é ${soma/vet.length}`) // faz a média
    }
}
function menorMaiorIdade(vet){
    if (vet.length == 0){
        console.log(`Nenhum habitante cadastrado`)
    }
    else{
        var menor = vet[0].idade // a idade do primeiro habitante é menor
        var maior = vet[0].idade // a idade do primeiro habitante é maior
        for(var i=1; i < vet.length; i++){ // percorre o vetor
            if(vet[i].idade > maior){
                maior = vet[i].idade
            }
            if(vet[i].idade < menor){
                menor = vet[i].idade
            }
        }
        console.log(`Maior idade: ${maior} e Menor Idade ${menor}`) 
    }
}

function qtdeMulheres(vet){
    console.log(`entrou na função qtdeMulheres`)
}