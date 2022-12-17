const saudacoes = require('./parametro')('Ana', 'Joao', 'Pedro')

console.log(saudacoes)

let saudades = module.exports = function(... nomes){
    return nomes.map(nome => `boa semana ${nome}!`)
}
