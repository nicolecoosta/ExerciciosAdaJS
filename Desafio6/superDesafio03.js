// Super desafio 03

function rolarDado(lados) {
  return Math.floor(Math.random() * lados) + 1;
}

function rolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas) {
  for (let t = 0; t < quantidadeTentativas; t++) {
      let soma = 0;

      for (let i = 0; i < quantidadeDados; i++) {
          let resultado = rolarDado(quantidadeLados);
          console.log(`Tentativa ${t + 1}, Dado ${i + 1}: ${resultado}`);
          soma += resultado;
      }

      console.log(`Tentativa ${t + 1} - Soma dos valores: ${soma}`);
  }
}

let quantidadeDados = parseInt(prompt("A quantidade de dados foi:"));
let quantidadeLados = parseInt(prompt("A quantidade de lados foi:"));
let quantidadeTentativas = parseInt(prompt("A quantidade de tentativas foi:"));

rolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas);