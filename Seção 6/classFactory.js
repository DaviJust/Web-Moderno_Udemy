class Pessoa {
    constructor(nome) {
        this.nome = nome
    }


falar() {
    console.log(`Meu nome e ${this.nome}`)
}

}

const p1 = new Pessoa("Joao")
p1.falar()

const Criarpessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = Criarpessoa(`joao`)
p2.falar()
