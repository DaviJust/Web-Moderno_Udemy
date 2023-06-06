function  funcionaOuNao(valor, chanceError) {
    return new Promise((resolve, reject) => {
        try {if (Math.random() < chanceError) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }}
        catch(e) {
            reject(e)
        }
    })
}

funcionaOuNao('Testando...', 0.9)
    .then(console.log)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log(`Quase fim!`))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log(`Fim!`))