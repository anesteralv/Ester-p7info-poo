import "reflect-metadata"
import { DataSource } from "typeorm"
import { Carro } from "./entity/Carro"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database/BD_CARROS.db",
    synchronize: true,
    logging: false,
    entities: [Carro],
    migrations: [],
    subscribers: [],
})
