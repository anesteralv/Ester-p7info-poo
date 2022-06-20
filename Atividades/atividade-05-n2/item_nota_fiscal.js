"use strict";
exports.__esModule = true;
exports.ItemNotaFiscal = void 0;
var ItemNotaFiscal = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function ItemNotaFiscal(id, sequencial, quantidade, produto) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto;
        this.valor = 0.0;
    }
    /* Métodos Acessores */
    ItemNotaFiscal.prototype.getid = function () {
        return this.id;
    };
    ItemNotaFiscal.prototype.getsequencial = function () {
        return this.sequencial;
    };
    ItemNotaFiscal.prototype.getquantidade = function () {
        return this.quantidade;
    };
    ItemNotaFiscal.prototype.getproduto = function () {
        return this.produto;
    };
    ItemNotaFiscal.prototype.getvalor = function () {
        return this.valor;
    };
    /* Métodos Modificadores */
    ItemNotaFiscal.prototype.setsequencial = function (sequencial) {
        this.sequencial = sequencial;
    };
    ItemNotaFiscal.prototype.valorItemNotaFiscal = function () {
        this.valor = this.getproduto().getvalorUnitario() * this.quantidade;
    };
    return ItemNotaFiscal;
}());
exports.ItemNotaFiscal = ItemNotaFiscal;
//
//
//
