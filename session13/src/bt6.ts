interface Flyable {
    fly(): void;
}

abstract class Bird {
    abstract makeSound(): void;

    move(): void {
        console.log("bay bay bay bay");
    }
}

class Sparrow extends Bird implements Flyable {
    makeSound(): void {
        console.log("oẹt oẹt oẹt oẹt");
    }

    fly(): void {
        console.log("con vẹt đang bay");
    }
}

let sparrow = new Sparrow();
sparrow.makeSound(); 
sparrow.move();
sparrow.fly(); 
