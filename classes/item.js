"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.item = void 0;
var item = /** @class */ (function () {
    function item(Nome, categoria, valor, quant) {
        this.Nome = Nome;
        this.categoria = categoria;
        this.valor = valor;
        this.quant = quant;
        this.valor_final = 0;
    }
    item.prototype.getNome = function () {
        return this.Nome;
    };
    item.prototype.getcategoria = function () {
        return this.categoria;
    };
    item.prototype.getvalor = function () {
        return this.valor;
    };
    item.prototype.getquant = function () {
        return this.quant;
    };
    item.prototype.getvalor_final = function () {
        return this.valor * this.quant;
    };
    item.prototype.setNome = function (Nome) {
        this.Nome = Nome;
    };
    item.prototype.setcategoria = function (categoria) {
        this.categoria = categoria;
    };
    item.prototype.setvalor = function (valor) {
        this.valor = valor;
    };
    item.prototype.setquant = function (quant) {
        this.quant = quant;
    };
    item.prototype.Imprimir = function () {
        console.log("Nome:".concat(this.getNome()));
        console.log("Categoria:".concat(this.getcategoria()));
        console.log("Valor:".concat(this.getvalor()));
    };
    return item;
}());
exports.item = item;
