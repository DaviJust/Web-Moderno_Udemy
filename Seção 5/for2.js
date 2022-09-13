const notas = [6.7, 7, 8, 9, 10]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome : `Ana`,
    sobrenome : `Paula`,
    idade: 29,
    peso: 80
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
