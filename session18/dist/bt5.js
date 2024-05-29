"use strict";
function combineFunctions(...funcs) {
    return function (...args) {
        let result = args;
        for (const func of funcs) {
            result = func(...result);
        }
        return result;
    };
}
// Sử dụng decorator để kết hợp các hàm lại với nhau
const combinedFunc = combineFunctions((x) => x + 1, (x) => x * 2, (x) => x - 3);
const finalResult = combinedFunc(5);
console.log(finalResult);
