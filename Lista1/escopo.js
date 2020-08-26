
// se n for 3: soma 1 + 2 + 3 -> 6
// se n for 8: soma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 -> 36
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

  //varia com escopo global
  // podem ter escopo globar vetores e objetos

  // exemplo com vetor
  function chefe(){
      var vetor = []
      entrada(vetor)
      console.log(vetor) 
      soma10(vetor)
      console.log(`Valor final do vetor ${vetor}`)
  }

  // variavel com escopo global - vet
  function entrada(vet){
      vet.push(8)
      vet.push(6)
      vet.push(7)
  }

 // variaveis com escopo global - vet
  function soma10(vet){
      for(var i = 0; i < vet.length; i++){
          vet[i] = vet[i] + 10
      }

  }
  chefe()


  function chefe(){
      var carro = new Object
      compra(carro)
      console.log(carro)
  }
  function compra(obj){
      obj.modelo = 'Renegade'
      obj.marca ='Jeep'
      obj.ano = 2019
  }

// exercício
  function cadastra(vet){
      var objeto = new Object()
      objeto.codigo = Number(prompt(`Informe codigo`))
      objeto.qtde = Number(prompt(`Informe quantidade`))
      objeto.preco = Number(prompt(`Informe o preço`))
      objeto.nome = prompt(`Informe nome`)
      // insere objeto no vetor
      vet.push(objeto)
  }
  function chefe(){
      var vetor = []
      cadastra(vetor)
      cadastra(vetor)
      console.log(vetor)
  }
  chefe()
