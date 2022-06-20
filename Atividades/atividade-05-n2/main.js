"use strict";
//
//
//
//
exports.__esModule = true;
var cliente_1 = require("./cliente");
var tipo_cliente_1 = require("./tipo_cliente");
var produto_1 = require("./produto");
var nota_fiscal_1 = require("./nota_fiscal");
var item_nota_fiscal_1 = require("./item_nota_fiscal");
//Criar uma instancia da classe Cliente 
var cliente = new cliente_1.Cliente(1, "José Maria da Silva", 100, "200.345.987-11", tipo_cliente_1.TipoCliente.PESSOA_FISICA);
console.log("=========================");
console.log(cliente);
console.log("=========================");
console.log("Id=" + cliente.getid());
console.log("Nome=" + cliente.getnome());
console.log("Codigo=" + cliente.getcodigo());
console.log("CnpjCpf=" + cliente.getcnpjcpf());
console.log("TipoCliente=" + cliente.gettipo());
var p = [];
var p1 = new produto_1.Produto(1, 150, "Arroz Tio Joao", 8.00);
var p2 = new produto_1.Produto(2, 200, "Feijão Janjão", 7.00);
var p3 = new produto_1.Produto(3, 300, "Farinha da Boa", 5.50);
p.push(p1.getvalorUnitario);
p.push(p2.getvalorUnitario);
p.push(p3.getvalorUnitario);
console.log(p);
var nf = new nota_fiscal_1.NotaFiscal(1, 201, cliente);
var itnf1 = new item_nota_fiscal_1.ItemNotaFiscal(1, 1, 10, p1);
var itnf2 = new item_nota_fiscal_1.ItemNotaFiscal(2, 2, 10, p2);
var itnf3 = new item_nota_fiscal_1.ItemNotaFiscal(3, 3, 10, p3);
var intf = [];
intf.push(itnf1.getquantidade);
intf.push(itnf2.getquantidade);
intf.push(itnf3.getquantidade);
for (var i = 0; i <= 3; i++) {
    var total1 = p[i] * intf[i];
}
itnf1.valorItemNotaFiscal();
itnf2.valorItemNotaFiscal();
itnf3.valorItemNotaFiscal();
console.log("=========================");
console.log(itnf1.getproduto().getdescricao());
console.log(itnf2.getproduto().getdescricao());
console.log(itnf3.getproduto().getdescricao());
console.log("=========================");
nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);
nf.adicionarItem(itnf3);
console.log("=========================");
console.log(nf);
console.log("=========================");
nf.calcularValorNotaFiscal();
nf.imprimirNotaFiscal();
