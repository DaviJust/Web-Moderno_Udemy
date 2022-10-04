function investimento (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return console.log("Montante da aplicacao financeira sob o regime de juros simples " + `R$: ` + (capitalInicial * (   tempoDeAplicacao * taxaDeJuros)))

}

// jeito do professor

investimento(30000,10,0.10)

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
