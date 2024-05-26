"use strict";
class Shape {
    constructor(name) {
        this.getName = () => {
        };
        this.getSize = () => {
        };
        this.name = name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.getName = () => {
            console.log(`Name: ${this.name}`);
        };
        this.getSize = () => {
            console.log(`Width: ${this.width} Height: ${this.height}`);
        };
        this.width = width;
        this.height = height;
    }
}
let OneRectangle = new Rectangle("Hạ", 100, 100);
console.log("Tên:", OneRectangle.getName());
console.log("Rộng và Dài:", OneRectangle.getSize());
