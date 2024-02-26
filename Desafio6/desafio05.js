// Desafio 05 

const valores = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40
}; 

let soma = 0; 

for (const propriedade in valores) {
    soma += valores[propriedade];
}

console.log("A soma dos valores é:", soma);