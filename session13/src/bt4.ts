interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangless implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}


let circle: Geometry = new Circle(10);
console.log("Circle Area: ", circle.calculateArea()); 
console.log("Circle Perimeter: ", circle.calculatePerimeter()); 

let rectangle: Geometry = new Rectangless(6,9);
console.log("Rectangle Area: ", rectangle.calculateArea()); 
console.log("Rectangle Perimeter: ", rectangle.calculatePerimeter()); 
