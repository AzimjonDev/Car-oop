"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
var CarRepository = /** @class */ (function () {
    function CarRepository() {
        this.carList = [];
        this.counter = 0;
    }
    CarRepository.prototype.create = function (car) {
        if (this.isExsist(car))
            throw new Error("This car already exists");
        else {
            car.setID(++this.counter);
            this.carList.push(car);
        }
    };
    CarRepository.prototype.isExsist = function (newCar) {
        for (var _i = 0, _a = this.carList; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.color === newCar.color) {
                return true;
            }
            else
                false;
        }
    };
    CarRepository.prototype.getList = function () {
        return this.carList;
    };
    return CarRepository;
}());
exports.CarRepository = CarRepository;
