//Part One - Type of Vehicle
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep!!!";       
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}
//Part Two - Number of wheels
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}
//Part Three - Motorcycle
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROM!!!";
    }
}
//Part Four - Garage
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed!!";
        }
        if(this.vehicles.length>=this.capacity){
            return "Sorry, we are full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}