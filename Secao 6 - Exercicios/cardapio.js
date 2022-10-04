function cardapio(codigoProduto,qtd) {
    switch(codigoProduto) {
    case 100:
        return qtd * 3
    case 200:
        return qtd * 4
    case 300:
        return qtd * 5.5
    case 400:
        return qtd * 7.5
    case 500:
        return qtd * 3.5
    case 600:
        return qtd * 2.8 

    }
}

console.log(cardapio(100, 1))
console.log(cardapio(200, 1))
console.log(cardapio(300, 1))
console.log(cardapio(400, 1))
console.log(cardapio(500, 1))
console.log(cardapio(600, 1))