// Desafio 07

let numero = 13;

switch (numero % 2) {
  case 0:
    console.log(`O número ${numero} é par`);
    break;
  case 1:
    console.log(`O número ${numero} é ímpar`);
    break;
  default:
    console.log("O número deve ser inteiro para ser considerado par ou ímpar");
    break;
}