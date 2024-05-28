"use strict";
const KiemTraPhanTu = (arr, num1, num2) => {
    if (num1 < 0 || num1 >= arr.length || num2 < 0 || num2 >= arr.length) {
        console.log("Chỉ mục không hợp lệ");
    }
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    return arr;
};
const numberArray = [1, 2, 3, 4, 5];
console.log(KiemTraPhanTu(numberArray, 1, 2));
const stringArray = ["hào", "hạ", "diệp"];
console.log(KiemTraPhanTu(stringArray, 2, 1));
