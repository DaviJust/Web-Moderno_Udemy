function gerarNumerosEntre(min, max, quantidade) {
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
      const numero = Math.floor(Math.random() * (max - min + 1) + min * quantidade);
      numeros.push(numero);
    }
    return numeros;
  }
  
  function gerarVariosNumeros() {
    return Promise.all([
      gerarNumerosEntre(1, 60, 1000),
      gerarNumerosEntre(1, 100, 500),
      gerarNumerosEntre(1000, 2000, 200)
    ]);
  }
  
  console.time('promise')

  gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')

    })