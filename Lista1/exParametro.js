// faca uma função que recebe dois números e um operador como parâmetros
// e faca o cálculo e retorne o resultado

function principal(){
    var n1 = Number(prompt(`Informe um número`))
    var n2 = Number(prompt(`Informe outro número`))
    var operacao = prompt(`Informe a operação que você deseja (+, -, *, /)`)
    //chama a função e atribui o resultado a uma variavel
    var resultado = soma(n1, n2, operacao)
    // mostra o resultado
    console.log(`O resultado da operação é ${resultado}`)
}
//função recebe 3 parâmetros
function soma(n1, n2, operacao){
    switch(operacao){
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': if(n2 == 0){
            return `Não pode dividir por zero`
        }
        else{
            return n1 / n2
        }
    }
}