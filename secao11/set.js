const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Pedro', 'Bruno', 'Pedro']
const nomeSet = new Set(nomes)
console.log(nomeSet)