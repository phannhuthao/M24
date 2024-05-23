<<<<<<< HEAD
class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

 
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculateCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}


const circle = new Circle(4);


console.log(`Radius: ${circle.getRadius()}`); // Output: Radius: 5
console.log(`Circumference: ${circle.calculateCircumference().toFixed(2)}`); // Output: Circumference: 31.42
console.log(`Area: ${circle.calculateArea().toFixed(2)}`); // Output: Area: 78.54


circle.setRadius(10);

console.log(`Updated Radius: ${circle.getRadius()}`); // Output: Updated Radius: 10
console.log(`Updated Circumference: ${circle.calculateCircumference().toFixed(2)}`); // Output: Updated Circumference: 62.83
console.log(`Updated Area: ${circle.calculateArea().toFixed(2)}`); // Output: Updated Area: 314.16

=======
class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

 
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculateCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}


const circle = new Circle(4);


console.log(`Radius: ${circle.getRadius()}`); // Output: Radius: 5
console.log(`Circumference: ${circle.calculateCircumference().toFixed(2)}`); // Output: Circumference: 31.42
console.log(`Area: ${circle.calculateArea().toFixed(2)}`); // Output: Area: 78.54


circle.setRadius(10);

console.log(`Updated Radius: ${circle.getRadius()}`); // Output: Updated Radius: 10
console.log(`Updated Circumference: ${circle.calculateCircumference().toFixed(2)}`); // Output: Updated Circumference: 62.83
console.log(`Updated Area: ${circle.calculateArea().toFixed(2)}`); // Output: Updated Area: 314.16

>>>>>>> 89e7efa79455b4c71d25007b76d142eff3290041
