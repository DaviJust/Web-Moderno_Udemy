const notas = [7.7, 4.4, 5.2, 8.9, 3.6, 7.3, 9.0]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

