"use strict";
//
//
//
//
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function Cliente(id, nome, codigo, cnpjcpf, tipo) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.tipo = tipo;
    }
    /* Métodos Acessores */
    Cliente.prototype.getid = function () {
        return this.id;
    };
    Cliente.prototype.getnome = function () {
        return this.nome;
    };
    Cliente.prototype.getcodigo = function () {
        return this.codigo;
    };
    Cliente.prototype.getcnpjcpf = function () {
        return this.cnpjcpf;
    };
    Cliente.prototype.gettipo = function () {
        return this.tipo;
    };
    /* Métodos Modificadores */
    Cliente.prototype.setnome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.setcodigo = function (codigo) {
        this.codigo = codigo;
    };
    Cliente.prototype.setcnpjcpf = function (cnpjcpf) {
        this.cnpjcpf = cnpjcpf;
    };
    Cliente.prototype.settipo = function (tipo) {
        this.tipo = tipo;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
