import { carrinho } from "../../classes/carrinho.js";
import { item } from "./../../classes/item.js";

const meuCarrinho = new carrinho();

const item1 = new item("Mouse Gamer", "Periféricos", 150, 2);
const item2 = new item("Teclado Mecânico", "Periféricos", 350, 1);
const item3 = new item("Monitor", "Display", 1200, 1);

meuCarrinho.additem(item1);
meuCarrinho.additem(item2);
meuCarrinho.additem(item3);

console.log("Carrinho inicial:");
meuCarrinho.listar();

console.log("\nRemovendo 1 unidade do Mouse Gamer:");
meuCarrinho.remover("Mouse Gamer", 1);
meuCarrinho.listar();

console.log("\nRemovendo mais 1 unidade do Mouse Gamer:");
meuCarrinho.remover("Mouse Gamer", 1);
meuCarrinho.listar();

console.log("\nTentando remover um item inexistente:");
meuCarrinho.remover("Headset", 1);

console.log("\nRemovendo item do índice 0:");
meuCarrinho.delete(0);
meuCarrinho.listar();
