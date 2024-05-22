"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculateCircumference() {
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
