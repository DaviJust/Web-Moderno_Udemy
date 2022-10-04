function plano(plan, salario) {
    switch(plan) {
        case `A`:
            return `Funcionario devera ter um um aumento de 10% resultando em aumento de: R$` + (salario * 0.1)
        case `B`:
            return `Funcionario devera ter um aumento de 15%, resultando em um aumento de: R$` + (salario * 0.15)
        case `C`:
            return `Funcionario devera ter um aumento de 20%, resultando em um aumento de: R$`+ (salario * 0.2)
    }
}
console.log(plano(`A`,4000))
console.log(plano(`B`,4000))
console.log(plano(`C`,4000))