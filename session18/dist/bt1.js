"use strict";
function logFunction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    if (typeof originalMethod === 'function') {
        descriptor.value = function (...args) {
            console.log(`Tên: ${propertyKey}`);
            console.log(`Tham số: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`Kết quả: ${JSON.stringify(result)}`);
            return result;
        };
    }
    return descriptor;
}
class ExampleClass {
    exampleMethod(param1, param2) {
        return `param1: ${param1}, param2: ${param2}`;
    }
}
const exampleMethodDescriptor = Object.getOwnPropertyDescriptor(ExampleClass.prototype, 'exampleMethod');
logFunction(ExampleClass.prototype, 'exampleMethod', exampleMethodDescriptor);
Object.defineProperty(ExampleClass.prototype, 'exampleMethod', exampleMethodDescriptor);
const instance = new ExampleClass();
instance.exampleMethod(1, "Hào");
