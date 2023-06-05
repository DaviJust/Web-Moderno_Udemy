const nums = [1,2,3,4,5]

// For com proposito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).repeat('.',',')}`

resultado = nums.map(soma10).map(paraDinheiro)
console.log(resultado)