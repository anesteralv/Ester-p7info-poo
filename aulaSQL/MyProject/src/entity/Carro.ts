import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Carro {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    modelo: string

    @Column()
    fabricante: string

    @Column()
    ano: number

    @Column()
    placa: string

}
