import { AppDataSource } from "./data-source"
import { Carro } from "./entity/Carro"

AppDataSource.initialize().then(async () => {

    console.log("Inserindo um novo carro no banco de dados...")
    const carro1 = new Carro()
    carro1.ano = 2015
    carro1.fabricante = "Chevrolet"
    carro1.modelo = "Onix"
    carro1.placa = "ORM-0101"
    await AppDataSource.manager.save(carro1)
    console.log("O carro foi salvo no banco com o id: " + carro1.id)

    console.log("Inserindo um novo carro no banco de dados...")
    const carro2 = new Carro()
    carro2.ano = 2018
    carro2.fabricante = "Volkswagen"
    carro2.modelo = "Polo"
    carro2.placa = "PNE-6096"
    await AppDataSource.manager.save(carro2)
    console.log("O carro foi salvo no banco com o id: " + carro2.id)

    console.log("Carregando dados dos carros...")
    const carros = await AppDataSource.manager.find(Carro)
    console.log("Carros: ", carros)


}).catch(error => console.log(error))
