interface Square {
    type: "square";
    sideLength: number;
}

interface Circle {
    type: "circle";
    radius: number;
}

type Shape = Square | Circle;

function calculateArea(shape: Shape): number {
    if (shape.type === "square") {
        return shape.sideLength * shape.sideLength;
    } else if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else {
        throw new Error("Invalid shape type");
    }
}

const square: Square = { type: "square", sideLength: 10 };
const circle: Circle = { type: "circle", radius: 2 };

console.log(calculateArea(square)); 
console.log(calculateArea(circle)); 
