let valor // nao inicializada
console.log(valor)

valor = null // ausence of valor(avoid this)
console.log(valor)
// console.log(valor.ToString()) // Gives Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //avoid this too
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // without price
console.log(!!produto.preco)
