"use strict";
exports.__esModule = true;
exports.NotaFiscal = void 0;
var NotaFiscal = /** @class */ (function () {
    /* Métodos */
    /* Método Construtor */
    function NotaFiscal(id, codigo, cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date();
        this.cliente = cliente;
        this.valorNota = 0.0;
        this.items = new Array();
    }
    /* Métodos Acessores */
    NotaFiscal.prototype.getid = function () {
        return this.id;
    };
    NotaFiscal.prototype.getcodigo = function () {
        return this.codigo;
    };
    NotaFiscal.prototype.getdata = function () {
        return this.data;
    };
    /* Métodos Modificadores */
    NotaFiscal.prototype.setcodigo = function (codigo) {
        this.codigo = codigo;
    };
    NotaFiscal.prototype.setdata = function (data) {
        this.data = data;
    };
    NotaFiscal.prototype.adicionarItem = function (item) {
        this.items.push(item);
    };
    // Percorrer o array items e calcular o valor total da NotaFiscal
    NotaFiscal.prototype.calcularValorNotaFiscal = function () {
        var valorCalculado = 0;
        return valorCalculado;
    };
    // Imprimir a NotaFiscal conforme o Layout definido
    NotaFiscal.prototype.imprimirNotaFiscal = function () {
        var dataTot = new Date();
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("NOTA FISCAL                                                                      ", dataTot);
        console.log("Cliente:", this.cliente.getcodigo(), "Nome:", this.cliente.getnome());
        console.log("CPF", this.cliente.getcnpjcpf());
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("ITENS:");
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("Seq    Descrição                                 QTD            Valor Unit            Preço");
        console.log("--------------------------------------------------------------------------------------------------");
        for (var vet = 0; vet < this.items.length; vet++) {
            var precoTotProd = this.items[vet].getquantidade() * this.items[vet].produto.getvalorUnitario();
            this.valorNota += precoTotProd;
            console.log("%i       %s                                 %f              %f               %f", this.items[vet].getsequencial(), this.items[vet].produto.getdescricao(), this.items[vet].getquantidade(), this.items[vet].getvalor(), this.items[vet].getquantidade() * this.items[vet].produto.getvalorUnitario());
        }
        console.log("--------------------------------------------------------------------------------------------------");
        console.log("Valor total da nota:", this.valorNota);
    };
    return NotaFiscal;
}());
exports.NotaFiscal = NotaFiscal;
