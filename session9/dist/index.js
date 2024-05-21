"use strict";
// Type Tuple: Mảng cố định
var _a;
let arrNotChangeLenght;
arrNotChangeLenght = [1, "Hào", true];
// arrNotChangeLenght = 3; // không thể dùng cách gán này
console.log(arrNotChangeLenght);
console.log("1", arrNotChangeLenght[1]);
// Option Readonly
let number = 10; // Khi khai báo ngầm định / literals
let number1 = [10];
// từ khóa: class
class UserClass {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
let user1 = {
    id: 1,
    name: "Nhựt Hào",
    age: 19,
};
// Type Guard
// TypeOf
// Instance of ( kiểm tra dữ liệu của 1 instance (đối tượng) có phải interface hoặc class hay không
let userClass = new UserClass(1, "Hạ", 19);
let userFake = {
    id: 1,
    name: "Hào",
    age: 19,
};
let userCopy = userClass; // gám địa chỉ tham chiếu
userClass.name = "Hào Hạ";
console.log(userClass);
console.log(userCopy);
// Toán tử in : kiểm tra xem 1 thuộc tính có tồn tài trong 1 object hay không
console.log("in" in userClass);
console.log("in" in userClass);
if ("name" in userClass) {
    console.log(userClass.name);
}
// Type Casting
// Có 2 kiêu ép kiểu:
// C1: Toán tử as: như là
let myfunction = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
// let result = myfunction("mot",2) as string;
// console.log(typeof result);
// C2: sử dụng <>
let result = myfunction(1, 2);
console.log(typeof result);
// Toán tử Optional chaining ?
// let Username = userFake.nan1 // nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
// nếu không thì trả về undefined
// console.log("username");
let userTest = {
    id: 1,
    name: userClass,
    age: 19
};
// let username = userTest?.name?.name; // Nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
// console.log(username);
// Toán tử Nullish coalescing "??"
let fullName = (_a = user1.name) !== null && _a !== void 0 ? _a : "Tên mặc định";
console.log("fullName", fullName);
// BT 2
// Viết một hàm nhận vào một Tuple chứa thông tin về một mặt hàng
// (tên, giá, số lượng). Tính tổng tiền dựa trên giá và số lượng.
// [Tên, giá, số lượng]
// Tính tổng
let product;
product = ["Bánh", 12500, 3];
function TinhTong(product) {
    const [name, price, quantity] = product;
    return price * quantity;
}
const total = TinhTong(product);
console.log("Tổng giá tiền sản phẩm", total);
