let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)

/*
for (let pos= 0;pos<valores.length;pos++) {
    // Percurso de exibição de vetores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posiçãp ${pos} tem o valor ${valores[pos]}`)
}