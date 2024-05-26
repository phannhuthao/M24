abstract class Shape {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName = () => {

    }
    getSize = () => {

    }
}
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string,width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getName = () => {
        console.log(`Name: ${this.name}`);
    }
    getSize = () => {
        console.log(`Width: ${this.width} Height: ${this.height}`);
    }
}
let OneRectangle: Rectangle = new Rectangle("Hạ", 100, 100);
console.log("Tên:",OneRectangle.getName());
console.log("Rộng và Dài:",OneRectangle.getSize());