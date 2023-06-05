// factory simples
function criarPessoa() {
    return {
        produto: "Salsichao",
        preco: "4",
        desconto: "0.4",
        finalPrice: 4 - (4 * 0.4), 
    }
}

console.log(criarPessoa())