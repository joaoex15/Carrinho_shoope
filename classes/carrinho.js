"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrinho = void 0;
var carrinho = /** @class */ (function () {
    function carrinho() {
        this.lista = [];
    }
    carrinho.prototype.additem = function (item) {
        this.lista.push(item);
    };
    carrinho.prototype.remover = function (nomeProduto, quantidadeRemover) {
        var index = this.lista.findIndex(function (element) { return element.getNome() === nomeProduto; });
        if (index !== -1) {
            var produto = this.lista[index];
            var novaQuantidade = produto.getquant() - quantidadeRemover;
            if (novaQuantidade > 0) {
                produto.setquant(novaQuantidade);
            }
            else {
                // Remove o item do carrinho
                this.lista.splice(index, 1);
            }
        }
        else {
            console.log("Produto \"".concat(nomeProduto, "\" n\u00E3o encontrado no carrinho."));
        }
    };
    carrinho.prototype.listar = function () {
        if (this.lista.length === 0) {
            console.log("Carrinho vazio.");
            return;
        }
        this.lista.forEach(function (element, index) {
            console.log("Index ".concat(index));
            element.Imprimir();
        });
    };
    carrinho.prototype.delete = function (index) {
        if (index >= 0 && index < this.lista.length) {
            this.lista.splice(index, 1);
        }
        else {
            console.log("Índice inválido!");
        }
    };
    return carrinho;
}());
exports.carrinho = carrinho;
