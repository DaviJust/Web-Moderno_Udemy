// const aprovados = ['Agatha','Aldo','Daniel', 'Raquel']

// aprovados.forEach(function(nome,indice){
//     console.log(`${indice + 1}) ${nome}`)
// })

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
}
}

const aprovados = ['Agatha', 'Aldo', 'Daniel','Raquel']

aprovados.forEach2(function(nome, indice){
    aprovados.forEach2(`${indice + 1}) ${nome}`)
})