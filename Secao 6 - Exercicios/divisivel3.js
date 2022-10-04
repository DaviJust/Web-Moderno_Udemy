function divisivel(numero, d) {
    Number.isInteger(d)
    
    if (numero / 3 === d) {
        console.log(`Numero pode divisivel por 3`)
    }
    else {
        console.log(`Numero nao divisivel por 3`)
    }
}
console.log(divisivel(12))