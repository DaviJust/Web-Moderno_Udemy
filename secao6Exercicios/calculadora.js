function calculadora(x, operacao ,y) {
    switch(operacao){
        case `+`:
            return x + y
        case `-`:
            return x - y
        case `*`:
            return x * y
        case `/`:
            return x / y
    default:
        return `Operacao Nula`
    }
}

console.log(calculadora(4,`-`,4 ))