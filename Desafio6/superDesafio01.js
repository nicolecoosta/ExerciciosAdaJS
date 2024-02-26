// Super desafio 01 

function simuladorRolagemDeDados(quantidadeDados) {
  let soma = 0;
  let rolagens = [];

  for (let i = 0; i < quantidadeDados; i++) {
    let resultado = Math.floor(Math.random() * 6) + 1;
    rolagens.push(resultado);
    soma += resultado;
  }

  console.log("Rolagens individuais é:", rolagens.join(", "));
  console.log("Soma dos valores é:", soma);
}

let quantidadeDados = parseInt(prompt("Quantidade de dados de 6 lados é:"));
simuladorRolagemDeDados(quantidadeDados);
