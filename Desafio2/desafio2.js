//Desafio 02 
const notasAluno = [6, 5, 8];
let somaNotasAluno = 0;

for (let i = 0; i < notasAluno.length; i++) {
    somaNotasAluno += notasAluno[i];
}

const media = somaNotasAluno / notasAluno.length;
console.log("A média das notas é:", media)