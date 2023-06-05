const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista:false},
    {nome: 'Maria', nota: 9.2, bolsista:true},
    {nome: 'Pedro', nota: 9.8, bolsista:false},
    {nome: 'Ana', nota: 8.7, bolsista:true}
]

console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumalador, atual){
    console.log(acumalador, atual)
    return acumalador + atual
}, 0)

console.log(resultado)