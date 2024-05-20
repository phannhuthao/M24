"use strict";
function calculateArea(shape) {
    if (shape.type === "square") {
        return shape.sideLength * shape.sideLength;
    }
    else if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        throw new Error("Invalid shape type");
    }
}
const square = { type: "square", sideLength: 10 };
const circle = { type: "circle", radius: 2 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
