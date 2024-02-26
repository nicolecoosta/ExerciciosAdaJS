// Desafio 03

let somaPares = 0; 
const numeros = [8, 10, 1, 0, 13]; 

for (let i = 0; i < numeros.length; i++) {
  const numeroInseridos = numeros[i];

  if (numeroInseridos === 0) {
    break; 
  }

  if (numeroInseridos % 2 === 0) {
    somaPares += numeroInseridos; 
  }
}

console.log("A soma dos NÚMEROS PARES inseridos é:", somaPares); 
