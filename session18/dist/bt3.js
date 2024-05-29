"use strict";
function cachingDecorator(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args); // Tạo một key duy nhất từ các tham số
        if (cache[key]) {
            console.log(`Kết quả được lấy từ cache cho tham số: ${key}`);
            return cache[key]; // Trả về kết quả từ cache nếu có
        }
        else {
            const result = fn.apply(args); // Gọi hàm gốc
            cache[key] = result; // Lưu kết quả vào cache
            console.log(`Kết quả đã được tính toán và lưu vào cache cho tham số: ${key}`);
            return result;
        }
    };
}
function exampleFunction(a, b) {
    console.log("Tính toán kết quả...");
    return a + b;
}
const cachedExampleFunction = cachingDecorator(exampleFunction);
console.log(cachedExampleFunction(1, 6));
console.log(cachedExampleFunction(2, 3));
console.log(cachedExampleFunction(4, 5));
console.log(cachedExampleFunction(3, 8));
