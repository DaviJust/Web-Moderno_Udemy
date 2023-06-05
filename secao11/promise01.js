// let p = new Promise(function(cumprirPromessa) {
//     cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
// })

// p.then(function(valor) {
//     console.log(valor)
// })

// re-factor the code should be like this
const primeiroElemento = arrayOuString => arrayOuString[2]
const letraMinuscula = letra => letra.toUpperCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)