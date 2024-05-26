"use strict";
class Bird {
    move() {
        console.log("bay bay bay bay");
    }
}
class Sparrow extends Bird {
    makeSound() {
        console.log("oẹt oẹt oẹt oẹt");
    }
    fly() {
        console.log("con vẹt đang bay");
    }
}
let sparrow = new Sparrow();
sparrow.makeSound();
sparrow.move();
sparrow.fly();
