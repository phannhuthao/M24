"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getCircumcircleRadius() {
        return Math.sqrt(this.width * this.width + this.height * this.height) / 2;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(10, 14);
console.log(`Chiều Rộng: ${rectangle.getWidth()}`);
console.log(`Chiều Dài: ${rectangle.getHeight()}`);
console.log(`Đường kính: ${rectangle.getPerimeter()}`);
console.log(`Tổng của tích là: ${rectangle.getArea()}`);
console.log(`Bán Kính: ${rectangle.getCircumcircleRadius().toFixed(2)}`);
rectangle.setWidth(10);
rectangle.setHeight(12);
console.log(`Chiều Rộng Sau: ${rectangle.getWidth()}`);
console.log(`Chiều Dài Sau: ${rectangle.getHeight()}`);
console.log(`Đường kính Sau: ${rectangle.getPerimeter()}`);
console.log(`Tổng của tích sau là:: ${rectangle.getArea()}`);
console.log(`Bán Kính Sau: ${rectangle.getCircumcircleRadius().toFixed(2)}`);
