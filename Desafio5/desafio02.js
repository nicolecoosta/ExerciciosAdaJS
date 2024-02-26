// Desafio 02

let numero = 83;

if (numero <= 1) {
  console.log(numero + 'não é um número PRIMO!');
} else {
  let divisor = 2;
  let primo = true;

  
  while (divisor < numero) {
    if (numero % divisor === 0) {
      primo = false;
      break;
    }
    divisor++;
  }

  if (primo) {
    console.log(numero + ' é um número PRIMO!');
  } else {
    console.log(numero + ' não é um número PRIMO!');
  }
}
