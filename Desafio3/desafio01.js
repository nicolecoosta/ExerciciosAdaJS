// Desafio 01

const listaDeCompras = new Map();

 listaDeCompras.set("Maca", "5");
 listaDeCompras.set("Banana", "3");
 listaDeCompras.set("Leite", "4");
 listaDeCompras.set("Pao", "10");

 console.log("Item específico: " + listaDeCompras.has("Pao"));

 console.log("O Quantidade do item na lista é : " + listaDeCompras.get("Leite"))

 console.log(listaDeCompras.set("Banana", "150"))
 console.log("Quantidade atualizada: " + listaDeCompras.get("Banana"))

 listaDeCompras.delete("Maca")
 console.log(listaDeCompras)
