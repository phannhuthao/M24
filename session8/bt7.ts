<<<<<<< HEAD
function isArray(variable: any): variable is any[] {
    return Array.isArray(variable);
}

function isObject(variable: any): variable is object {
    return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}

function checkType(variable: any): void {
    if (typeof variable === 'number') {
        console.log(`${variable} là một số.`);
    } else if (isArray(variable)) {
        console.log(`${variable} là một mảng.`);
    } else if (isObject(variable)) {
        console.log(`${variable} là một đối tượng.`);
    } else {
        console.log(`Không thể xác định loại dữ liệu của ${variable}.`);
    }
}

checkType(10); // Output: 10 là một số.
checkType([1, 2, 3]); // Output: [1, 2, 3] là một mảng.
checkType({ name: 'John', age: 30 }); // Output: { name: 'John', age: 30 } là một đối tượng.
=======
function isArray(variable: any): variable is any[] {
    return Array.isArray(variable);
}

function isObject(variable: any): variable is object {
    return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}

function checkType(variable: any): void {
    if (typeof variable === 'number') {
        console.log(`${variable} là một số.`);
    } else if (isArray(variable)) {
        console.log(`${variable} là một mảng.`);
    } else if (isObject(variable)) {
        console.log(`${variable} là một đối tượng.`);
    } else {
        console.log(`Không thể xác định loại dữ liệu của ${variable}.`);
    }
}

checkType(10); // Output: 10 là một số.
checkType([1, 2, 3]); // Output: [1, 2, 3] là một mảng.
checkType({ name: 'John', age: 30 }); // Output: { name: 'John', age: 30 } là một đối tượng.
>>>>>>> ddc9f7953e0b57e05018e1934c71335f98779180
