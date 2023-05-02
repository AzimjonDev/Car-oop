import { CarRepository } from "./entitys/car-repository";
import { Car } from "./models/car";

let carRepo = new CarRepository();

carRepo.create(new Car('Cobolt', 2023, 'Black'))
carRepo.create(new Car('Cobolt', 2023, 'Black'))

console.log(carRepo)

let list = carRepo.getList()

console.log(list)