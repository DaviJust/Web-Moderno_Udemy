function criarProuto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProuto("notebook", 2199.49))
console.log(criarProuto("Ipad", 1199.49))