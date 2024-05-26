interface changeSpeed {
    speedUp(): number;
    slowDown(): number;
    stop(): number;
}

class Vehicle implements changeSpeed {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(): number {
        this.speed += 10;
        return this.speed;
    }

    slowDown(): number {
        this.speed -= 10;
        if (this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    stop(): number {
        this.speed = 0;
        return this.speed;
    }
}


let car = new Vehicle(40);

console.log("Tốc độ ban đầu: ", car['speed']); 

console.log("Tăng tốc: ",car.speedUp()); 
console.log("Giảm tốc: ",car.slowDown()); 
console.log("Dừng", car.stop()); 

console.log("Tăng tốc lần nữa: ", car.speedUp()); 
