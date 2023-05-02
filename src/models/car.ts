export class Car{
    private id!:number
    constructor(public name: string,public age:number,public color:string){}
    drive(){
        console.log(`${this.name}is driving`);
    }
    colorCar(){
        console.log(`${this.name}is${this.color}`);
        
    }
    
    getID(){
        return this.id
    }
    
    setID(value: number){
        this.id = value;
    }
}