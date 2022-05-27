export class Ponto{
    private PontoX:number = 0;
    private PontoY:number = 0;

    constructor(PontoX: number, PontoY:number){
        this.PontoX = PontoX;
        this.PontoY = PontoY;
    }

    get X(){
        return this.PontoX;
    }

    get Y(){
        return this.PontoY;
    }

    set X(x: number){
        this.PontoX = x
    }

    set Y(y: number){
        this.PontoY = y
    }
}