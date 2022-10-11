// usando a notacao liberal
const obj = {}
console.log(obj)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
}
}

const p1 = new Produto(`Caneta`, 7.99, 0.15)
const p2 = new Produto(`Notebook`, 2998.99, 0.25)
console.log(p1.getPrecoComDesconto() , p2.getPrecoComDesconto())

