// Super Desafio 02 

function lancarDados(numeroDados, numeroLados) {
  let rolls = [];
  let sum = 0;

  for (let i = 0; i < numeroDados; i++) {
    let roll = Math.floor(Math.random() * numeroLados) + 1;
    rolls.push(roll);
    sum += roll;
  }
  console.log(`As rolagens: ${rolls.join(", ")}`);
  console.log(`A soma: ${sum}`);
}
lancarDados(2, 9);


