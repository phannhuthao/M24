// // Định nghĩa một decorator function để bắt buộc kiểu dữ liệu của các tham số
// function enforceTypes(...expectedTypes: any[]) {
//     return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//         const originalMethod = descriptor.value;

//         descriptor.value = function(...args: any[]) {
//             if (expectedTypes.length !== args.length) {
//                 throw new Error(`Cần ${expectedTypes.length} đối số, nhận được ${args.length}`);
//             }

//             for (let i = 0; i < expectedTypes.length; i++) {
//                 const expectedType = expectedTypes[i];
//                 const arg = args[i];
//                 if (typeof arg !== expectedType.name.toLowerCase()) {
//                     throw new Error(`Tham số ${i + 1} phải là kiểu ${expectedType.name}`);
//                 }
//             }

//             return originalMethod.apply(this, args);
//         };

//         return descriptor;
//     }
// }

// // Ví dụ sử dụng decorator
// class Calculator {
//     @enforceTypes(Number, Number)
//     add(x: number, y: number): number {
//         return x + y;
//     }
// }

// const calc = new Calculator();

// try {
//     console.log(calc.add(5, 6));  // Output: 11
//     console.log(calc.add('a', 6));  // Throws an Error
// } catch (error) {
//     console.error(error.message);
// }
