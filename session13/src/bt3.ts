class Animal {
    makeSound = () => {
        console.log("Hmmmmmmmmmm");
    }

    move = () => {
        console.log("Di chuyển")
    }
}

class Dog extends Animal {
    makeSound = () => {
        console.log("Gâu gâu gâu");
    }
}

class Cat extends Animal {
    makeSound = () =>{
        console.log("Mew mew mew");
    }
}

let genericAnimal: Animal = new Animal();
let dog: Animal = new Dog();
let cat: Animal = new Cat();

genericAnimal.makeSound(); 
dog.makeSound();          
cat.makeSound();        
