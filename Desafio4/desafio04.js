// Desafio 04

let primeiroLado = 11;
let segundoLado = 11;
let terceiroLado = 7;

if (primeiroLado === segundoLado && segundoLado === terceiroLado) {
   console.log("Equilátero, 3 lados iguais!");
} else if (primeiroLado === segundoLado || primeiroLado === terceiroLado || segundoLado === terceiroLado) {
    console.log("Isósceles, só 2 lados são iguais!");
} else {
    console.log("Escaleno, os três lados são diferentes!");
}
