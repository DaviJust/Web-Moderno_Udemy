let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!!isativo)

console.log(`os verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!` `)
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isativo = 0))
//todos os numeros sao verdadeiros com excecao do 0

//Ja os falsos seriam esses aqui embaixo
console.log(`os falsos...`)
console.log(!!0)
console.log(!!``)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))

console.log(`pra finalizar...`)
console.log(!!(`` || null || 0 || ` `))

let nome = `Lucas `
console.log(nome || `Desconhecido`)