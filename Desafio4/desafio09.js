// Desafio 09

let mes = "maio";

switch (mes.toLowerCase()) { 
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log(`O mês de ${mes} está no Inverno`);
    break;
  case "março":
  case "abril":
  case "maio":
    console.log(`O mês de ${mes} está na Primavera`);
    break;
  case "junho":
  case "julho":
  case "agosto":
    console.log(`O mês de ${mes} está no Verão`);
    break;
  case "setembro":
  case "outubro":
  case "novembro":
    console.log(`O mês de ${mes} está no Outono`);
    break;
  default: 
    console.log(`O mês de ${mes} não é válido`);
    break;
}