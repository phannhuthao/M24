"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangless {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle(10);
console.log("Circle Area: ", circle.calculateArea());
console.log("Circle Perimeter: ", circle.calculatePerimeter());
let rectangle = new Rectangless(6, 9);
console.log("Rectangle Area: ", rectangle.calculateArea());
console.log("Rectangle Perimeter: ", rectangle.calculatePerimeter());
