import {Ponto} from './Ponto'
export class Quadrilatero{
    private pontoA: Ponto
    private pontoB: Ponto

    constructor(PontoA: Ponto, PontoB: Ponto){
        this.pontoA = PontoA
        this.pontoB = PontoB
    }

    pertenceArea(ponto: Ponto): boolean{
        if(this.pontoA.X <= ponto.X && ponto.X <= this.pontoB.X
             && this.pontoB.Y <= ponto.Y && ponto.Y <= this.pontoA.Y  ){
                 return true
             }else{
                 return false
             }
    }
}