let aprovados = ['bia', 'carlos', 'ana']

console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Paulo'

aprovados.push('vinicius')

console.log(aprovados)

console.log(aprovados.length)

aprovados[9] = 'rafael'

console.log(aprovados)

aprovados.sort()

console.log(aprovados)

delete aprovados[5]

console.log(aprovados)

aprovados = ['bia', 'vinicius', 'ana']

aprovados.splice(1, 1, 'josé', 'maria')

console.log(aprovados)

