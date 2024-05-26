"use strict";
class Animal {
    constructor() {
        this.makeSound = () => {
            console.log("Hmmmmmmmmmm");
        };
        this.move = () => {
            console.log("Di chuyển");
        };
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.makeSound = () => {
            console.log("Gâu gâu gâu");
        };
    }
}
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.makeSound = () => {
            console.log("Mew mew mew");
        };
    }
}
let genericAnimal = new Animal();
let dog = new Dog();
let cat = new Cat();
genericAnimal.makeSound();
dog.makeSound();
cat.makeSound();
