//Como e so um exercicio, logo o professor nao precisou criar de forma que fosse realmente dizer a media dos aluno de forma efetiva.
const valores = [7.7, 8.9, 6.3, 9.2] 
console.log(valores[0], valores[3])
console.log(valores[4]) //Esse indice nao existe, todavia, no JavaScript nao foi gerado erro, mas identificou que o valor nao esta definido

valores[5] = 10 
console.log(valores)
console.log(valores.length) //This will say how many elements does have on `valores`

valores.push({id : 3},false,null,`teste`)
console.log(valores)
//The ideal is have each array for each type of object(clients, logics, cards...). Example: I need data for clients, so you need each array for this x kinda info from it

console.log(valores.pop) //isso tira o array
delete valores(0) //esse daqui tira o valor de indice 0
console.log(valores)

console.log(typeof valores) 
