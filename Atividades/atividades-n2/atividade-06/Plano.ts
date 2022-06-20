import {Ponto} from "./Ponto"
import { Quadrilatero } from "./Quadrilatero"

let pontoA = new Ponto(0, 8)
let pontoB = new Ponto(10, 0)

let pontoP = new Ponto(4, 3)
let pontoT = new Ponto(10, 5)
let pontoS = new Ponto(11, 6)

let Quad = new Quadrilatero(pontoA,pontoB)

console.log(Quad.pertenceArea(pontoP))
console.log(Quad.pertenceArea(pontoT))
console.log(Quad.pertenceArea(pontoS))