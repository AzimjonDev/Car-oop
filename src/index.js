"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_repository_1 = require("./entitys/car-repository");
var car_1 = require("./models/car");
var carRepo = new car_repository_1.CarRepository();
carRepo.create(new car_1.Car('Cobolt', 2023, 'Black'));
carRepo.create(new car_1.Car('Cobolt', 2023, 'Black'));
console.log(carRepo);
var list = carRepo.getList();
console.log(list);
