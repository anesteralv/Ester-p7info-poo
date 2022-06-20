//
//
//
//

import { TipoCliente } from "./tipo_cliente";
export class Cliente {

    /* Atributos */
    private id: number;
    private nome: string;
    private codigo : number; 
    private cnpjcpf: string;
    private tipo: TipoCliente;    

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, nome: string, codigo: number, cnpjcpf: string, tipo: TipoCliente) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.tipo = tipo; 
    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getnome(): string {
        return this.nome;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getcnpjcpf(): string {
        return this.cnpjcpf;
    }

    gettipo(): TipoCliente {
        return this.tipo;
    }


    /* Métodos Modificadores */     
    setnome(nome: string): void {
        this.nome = nome;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setcnpjcpf(cnpjcpf: string): void {
        this.cnpjcpf = cnpjcpf;
    } 

    settipo(tipo: TipoCliente) : void {
        this.tipo = tipo;
    }


}