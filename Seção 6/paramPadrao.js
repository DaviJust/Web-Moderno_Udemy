// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    a = b || 1
    a = c || 1
    return a + b + c
}

console.log(soma(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNan(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma3(0,0,0))