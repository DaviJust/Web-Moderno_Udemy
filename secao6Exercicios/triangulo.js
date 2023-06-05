function Triangulo(x,y,z) {
    if (x == y == z) {
        return  "Triangulo equilatero"
    }
    else if (x === y || x === z || y === z) {
        return "Triangulo Isósceles"
    }
    else {
        return "Triangulo Escaleno"
    }
}

console.log(Triangulo(4,4,1))

