"use strict";
function logDecorator(fn) {
    return function (...args) {
        const result = fn(...args);
        console.log(`Tên: ${fn.name}`);
        console.log(`Tham số: ${JSON.stringify(args)}`);
        console.log(`Kết quả: ${result}`);
        return result;
    };
}
function addObject(a, b) {
    return a + b;
}
const one = logDecorator(addObject);
one(2, 3);
