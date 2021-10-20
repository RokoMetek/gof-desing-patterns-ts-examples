interface Car {
    drive(): void;
}

class BasicCar implements Car {
    drive(): void {
        console.log("Drive Basic Car");
    }
}

class CarDecorator implements Car {
    
    protected car: Car;
    constructor(car: Car) {
        this.car = car;
    }
    
    drive(): void {
        this.car.drive
    }
}



class SportCar extends CarDecorator {
    
    private turboMode: string;
    constructor(car: Car) {
        super(car);
    }

    setTurboMode(turboMode: string) {
        this.turboMode = turboMode;
    }

    drive(): void {
        console.log("Drive super car with " + this.turboMode);
        super.drive();
    }

}


class FutureCar extends CarDecorator {

    private guns: string;

    constructor(car: Car) {
        super(car);
    }

    drive(): void {
        console.log("Drive Future Car with: " + this.guns);
        super.drive();
    }
}

(function main() {

    let basicCar: BasicCar = new BasicCar();
    basicCar.drive();

    let sportCar: SportCar = new SportCar(new BasicCar());
    sportCar.setTurboMode("Super Turbo");
    sportCar.drive();


    let futureCar: Car = new FutureCar(new SportCar(new BasicCar()));
    futureCar.drive();


})()