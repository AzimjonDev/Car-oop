import { Car } from "../models/car";


export class CarRepository{
   private carList: Car[] = [];
  public counter: number = 0;
  
  create(car:Car){
      if(this.isExsist(car)) throw new Error("This car already exists");
      else{
          car.setID(++this.counter)
          this.carList.push(car)
      }
       
  }
  
  isExsist(newCar:Car){
      for(let car of this.carList){
          if(car.color === newCar.color){
              return true;
          }else false
      }
  }
  getList(){
      return this.carList;
  }

}