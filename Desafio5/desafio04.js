// Desafio 04

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
while (true) {
  tentativas++;
  const palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  if (palpite === numeroAleatorio) {
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s)!`);
    break; 
  } else if (palpite < numeroAleatorio) {
    console.log("Tente um número maior!");
  } else {
    console.log("Tente um número menor!");
  }
}
