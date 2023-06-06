const numerosProibidos = [];

function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max];
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!');
        } else {
            resolve(aleatorio);
        }
    });
}

async function gerarMegaSena(qtDeNumeros, tentativas = 1) {
    const numeros = [];
    try {
        for (let _ of Array(qtDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 10));
        }
        return numeros;
    } catch (e) {
        if (tentativas > 1) {
            throw "Não deu certo";
        } else {
            return gerarMegaSena(qtDeNumeros, tentativas + 1);
        }
    }
}

gerarMegaSena(100)
    .then(console.log)
    .catch(console.log);
