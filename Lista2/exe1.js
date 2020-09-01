chefe()

function chefe(){
    var vendedor = []
    var vendas= []
    do {
        var opcao = Number(prompt(`[1]. Cadastrar Vendedor [2]. Cadastrar Venda [3]. Sair`))
        switch(opcao){
            case 1: cadastraVendedor(vendedor) // escopo global
                    break
            case 2: cadastraVendas(vendas, vendedor) // é necessario o vetor de vendas e tbm o vetor de vendedores
                    break 
            case 3:
        }
    }
    while (opcao != 3)
}

function cadastraVendedor(vend){   // escopo local - vend faz refencia para vendedores
    var objeto = new Object
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome`)
    // verifica se o código já existe
    for(var i=0; i < vend.length; i++){
        if (vend[i].codigo == objeto.codigo){
            console.log(`Código já existente`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vend.pusH(objeto)
    console.log(`Vendedor cadastrado com sucesso`)
}

function cadastraVendas(vend, vendor){ // vend representa vendas e vendor representa vendedores
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))

    // verifica se o codigo do vendedor existe
    for (var i = 0; i < vendor.length; i++){
        if (vendor[i].codigo == objeto.vendedor){ // vendedor existe
            for(var j = 0; j < vend.length; i++){ // verifica se vendedor ja tem cadastro no mês
                if((vend[j].vendedor == objeto.vendedor) && (vend[j].mes == objeto.mes)){
                    console.log(`Venda já cadastrada`)
                    return 0 // sai da função
                }
            }
            // insere no vetor de vendas
            vend.push(objeto)
            console.log(`Venda inserida com sucesso`)
            console.log(objeto)

            return 0 // sai da função
        }
    }
    console.log(`Vendedor não existe`)

}