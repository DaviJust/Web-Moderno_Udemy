const valores = [100, 200, 300]
const comDesconto = valores.map(valor=>{
 return valor*0.9 // aplicando 10% de desconto
})
console.log(valores) // [100, 200, 300]
console.log(comDesconto) // [90, 180, 270]

const nome = ["Maria", "Joao","Pedro","Roberto"]
const nomeAbrev = nome.map(nomes => { nomes = nome.length; return nome  })
console.log(nomeAbrev)

const nomes = ['Renato', 'Astolfo', 'Carla', 'Michelle'];
nomes.forEach( nome=> {
 console.log(`${nome} entrou no grupo!`);
})

const nomezz = ['Renato', 'Astolfo', 'Carla', 'Michelle'];
for (let n of nomes) {
 console.log(`${n} saiu do grupo!` );
}

const gastos = [
    112.46, //conta de luz
    42.89, //conta de água
    799.00, //Aluguel
    428.9 //mercado
   ];
   const total = gastos.reduce((acumulador, atual) => acumulador + atual);
   console.log(total) 
