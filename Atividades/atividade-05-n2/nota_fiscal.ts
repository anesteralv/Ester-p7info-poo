//
//
//
//
import {Cliente} from "./cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";
export class NotaFiscal {

    /* Atributos */
    id: number;
    codigo:number; 
    data: Date;
    cliente: Cliente;
    items :  Array<ItemNotaFiscal>;  
    valorNota : number;

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, codigo: number, cliente : Cliente ) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date(); 
        this.cliente = cliente; 
        this.valorNota =0.0;
        this.items = new Array<ItemNotaFiscal>();


    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getdata(): Date {
        return this.data;
    }

    /* Métodos Modificadores */     
    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setdata(data : Date) : void {
        this.data = data;
    }

     

    adicionarItem(item: ItemNotaFiscal) {
         this.items.push(item);
    }

    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() : number {
        let valorCalculado = 0;

        return valorCalculado;
    }

    // Imprimir a NotaFiscal conforme o Layout definido
    
    imprimirNotaFiscal(): void {
        var dataTot = new Date();
        console.log("--------------------------------------------------------------------------------------------------")
        console.log("NOTA FISCAL                                                                      ", dataTot)
        console.log("Cliente:",this.cliente.getcodigo(), "Nome:",this.cliente.getnome())
        console.log("CPF",this.cliente.getcnpjcpf())
        console.log("--------------------------------------------------------------------------------------------------")
        console.log("ITENS:")
        console.log("--------------------------------------------------------------------------------------------------")
        console.log("Seq    Descrição                                 QTD            Valor Unit            Preço")
        console.log("--------------------------------------------------------------------------------------------------")
        for(let vet = 0; vet < this.items.length; vet++){
            let precoTotProd = this.items[vet].getquantidade() * this.items[vet].produto.getvalorUnitario()
            this.valorNota += precoTotProd
            console.log("%i       %s                                 %f              %f               %f", 
            this.items[vet].getsequencial(), this.items[vet].produto.getdescricao(), this.items[vet].getquantidade(), this.items[vet].getvalor(), this.items[vet].getquantidade() * this.items[vet].produto.getvalorUnitario())
        }
        console.log("--------------------------------------------------------------------------------------------------")
        console.log("Valor total da nota:", this.valorNota)
    }

}