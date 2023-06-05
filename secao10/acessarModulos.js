const moduloA = require('../Secao_10/moduloA')
console.log(moduloA.ola)

const moduloB = require('../Secao_10/moduloB')
console.log(moduloB.bomDia)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom dia')
    res.end()
}).listen(1)