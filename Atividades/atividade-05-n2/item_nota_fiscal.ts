//
//
//
//
import {Produto} from "./produto"

export class ItemNotaFiscal {

    /* Atributos */
    id: number;
    sequencial: number; 
    quantidade: number;
    produto : Produto;
    valor : number;    

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, 
                 sequencial: number, 
                 quantidade: number, 
                 produto: Produto
                 ) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto; 
        this.valor = 0.0;
    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getsequencial(): number {
        return this.sequencial;
    }

    getquantidade(): number {
        return this.quantidade;
    }

    getproduto() : Produto {
        return this.produto;
    }

    getvalor(): number {
        return this.valor;
    }

        /* Métodos Modificadores */     
    setsequencial(sequencial: number): void {
        this.sequencial = sequencial;
    }

    
    valorItemNotaFiscal() : void {
        this.valor = this.getproduto().getvalorUnitario() * this.quantidade;
    }
    
}
//
//
//

