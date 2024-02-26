// Desafio 08

let palavra = prompt("Insira uma palavra: ");

palavra = palavra.toLowerCase();

let contadorVogais = 0;

for (let i = 0; i < palavra.length; i++) {

    if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u') {
        contadorVogais++;
    }
}

console.log("A palavra inserida contém " + contadorVogais + " vogais.");
