// object.preventExtensions
const produto = Object.preventExtensions({
    nome: `Qualquer`, prepeco: 1.99 , tag: `promocao`
})
console.log(`exteensivevl`, Object.isExtensible(produto))

produto.nome = `Borracha`
produto.descricao = `Borracha escolar branca`
delete produto.tag
console.log(produto)

//Objecct.seal
const pessoa = { nome: `Juliana`, idade: 35}
Object.seal(pessoa)
console.log(`Selado`, Object.isSealed(pessoa))

pessoa.sobrenome = `Silva`
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
