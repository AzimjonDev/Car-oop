"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.name, "is driving"));
    };
    Car.prototype.colorCar = function () {
        console.log("".concat(this.name, "is").concat(this.color));
    };
    Car.prototype.getID = function () {
        return this.id;
    };
    Car.prototype.setID = function (value) {
        this.id = value;
    };
    return Car;
}());
exports.Car = Car;
