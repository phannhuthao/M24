"use strict";
const singleNumber = 3;
const numberArray = [2, 4, 6, 8];
function NhanSo(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (Array.isArray(input)) {
        return input.map(num => num * num);
    }
    else {
        throw new Error("");
    }
}
console.log(NhanSo(singleNumber));
console.log(NhanSo(numberArray));
