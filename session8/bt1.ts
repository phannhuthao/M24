type InputType = "number" | "boolean" | "string" | "null" | "undefined";

function parseInput(input: InputType): number | boolean | string | null | undefined {
    switch (input) {
        case "number":
            return 0; 
        case "boolean":
            return false; 
        case "string":
            return ""; 
        case "null":
            return null; 
        case "undefined":
            return undefined; 
        default:
            return undefined; 
    }
}
console.log(parseInput("number"));    // Output: 0
console.log(parseInput("boolean"));   // Output: false
console.log(parseInput("string"));    // Output: ""
console.log(parseInput("null"));      // Output: null
console.log(parseInput("undefined")); // Output: undefined

