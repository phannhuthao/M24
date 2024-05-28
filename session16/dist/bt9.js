"use strict";
const lamPhangMang = (arr) => {
    // logic: 
    // Duyệt qua lần lượt từng phần tử
    // Kiêm tra xem có phải 1 mảng hay không thì lại tiếp tục duyệt
    let newArr = [];
    arr.forEach(e => {
        if (Array.isArray(e)) { // Nếu như phần tử là 1 mảng 
            newArr = [...newArr, ...lamPhangMang(e)];
        }
        else {
            newArr = [...newArr, e];
        }
    });
    return newArr;
};
let arr = [1, [2, [3, 4], 5], 6];
console.log(lamPhangMang(arr));
