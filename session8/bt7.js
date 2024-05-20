"use strict";
function isArray(variable) {
    return Array.isArray(variable);
}
function isObject(variable) {
    return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}
function checkType(variable) {
    if (typeof variable === 'number') {
        console.log(`${variable} là một số.`);
    }
    else if (isArray(variable)) {
        console.log(`${variable} là một mảng.`);
    }
    else if (isObject(variable)) {
        console.log(`${variable} là một đối tượng.`);
    }
    else {
        console.log(`Không thể xác định loại dữ liệu của ${variable}.`);
    }
}
checkType(10); // Output: 10 là một số.
checkType([1, 2, 3]); // Output: [1, 2, 3] là một mảng.
checkType({ name: 'John', age: 30 }); // Output: { name: 'John', age: 30 } là một đối tượng.
