//
//
//
//
export class Produto {

    /* Atributos */
    private id: number;
    private codigo : number; 
    private descricao: string;
    private valorUnitario : number;    

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, codigo: number, descricao: string, valorUnitario: number) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valorUnitario = valorUnitario; 
    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getdescricao(): string {
        return this.descricao;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getvalorUnitario(): number {
        return this.valorUnitario;
    }

        /* Métodos Modificadores */     
    setdescricao(descricao: string): void {
        this.descricao = descricao;
    }

    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setvalorUnitario(valorUnitario: number): void {
        this.valorUnitario = valorUnitario;
    } 
    
}