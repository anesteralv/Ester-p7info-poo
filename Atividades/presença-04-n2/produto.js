"use strict";
exports.__esModule = true;
exports.Produto = void 0;
//
//
//
//
var Produto = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function Produto(id, codigo, descricao, valorUnitario) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valorUnitario = valorUnitario;
    }
    /* Métodos Acessores */
    Produto.prototype.getid = function () {
        return this.id;
    };
    Produto.prototype.getdescricao = function () {
        return this.descricao;
    };
    Produto.prototype.getcodigo = function () {
        return this.codigo;
    };
    Produto.prototype.getvalorUnitario = function () {
        return this.valorUnitario;
    };
    /* Métodos Modificadores */
    Produto.prototype.setdescricao = function (descricao) {
        this.descricao = descricao;
    };
    Produto.prototype.setcodigo = function (codigo) {
        this.codigo = codigo;
    };
    Produto.prototype.setvalorUnitario = function (valorUnitario) {
        this.valorUnitario = valorUnitario;
    };
    return Produto;
}());
exports.Produto = Produto;
