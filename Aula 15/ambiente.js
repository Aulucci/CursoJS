let num = [5, 8, 2, 9, 3] //vetor
num.push(1) // colocaar o 1 no final
num.sort() // deixar ordem crescente
console.log(`O vetor é ${num}`) // aparecer o conteudo dentro do vetor
console.log(`Tem ${num.length} elementos`) // mostrar quantas posições/elementos tem o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostrar o conteudo da primeira posição qu é o num[0]
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
