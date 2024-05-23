<<<<<<< HEAD
interface Person {
    name: string;
    age: number;
    address: object;
}

function validatePerson(obj: any): boolean {
    if (typeof obj !== "object" || obj === null) {
        return false;
    }

    const hasName = typeof obj.name === "string";
    const hasAge = typeof obj.age === "number";
    const hasAddress = typeof obj.address === "object" && obj.address !== null;

    return hasName && hasAge && hasAddress;
}

console.log(validatePerson({ name: "Hào", age: 19, address: {} })); // Output: true
console.log(validatePerson({ name: "Hào", age: 19, address: null })); // Output: false
console.log(validatePerson({ name: "Hào", age: 19, address: { street: "65 Trần Tuấn Khải" } })); // Output: true
=======
interface Person {
    name: string;
    age: number;
    address: object;
}

function validatePerson(obj: any): boolean {
    if (typeof obj !== "object" || obj === null) {
        return false;
    }

    const hasName = typeof obj.name === "string";
    const hasAge = typeof obj.age === "number";
    const hasAddress = typeof obj.address === "object" && obj.address !== null;

    return hasName && hasAge && hasAddress;
}

console.log(validatePerson({ name: "Hào", age: 19, address: {} })); // Output: true
console.log(validatePerson({ name: "Hào", age: 19, address: null })); // Output: false
console.log(validatePerson({ name: "Hào", age: 19, address: { street: "65 Trần Tuấn Khải" } })); // Output: true
>>>>>>> ddc9f7953e0b57e05018e1934c71335f98779180
