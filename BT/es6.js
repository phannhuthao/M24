// comment nhiều dòng
/*
    Tổng quan về ES6
    1. Từ khóa let, const
    2. Template string 
    3. Arrow function 
    4. Destructuring
    5. Rest Parameter
    6. Spread operator
    7. Vòng lặp for/of
*/

// 1. Từ khóa let, const
var number = 10;
console.log(number);
// từ khóa let
// phạm vi truy cập: trong block scope ( dấu {} ví dụ : if ,esle, function, for)

// phạm vi của var là gobal
// if (true) {
//     let check = true;
// }
// console.log(check);

// function check() {
//     var isPrime = true;
// }
// check();
// console.log(isPrime);


// Khái niệm Hoising - gán giá trị trước khai báo
// let không cho phép gán giá trị trước khi khai báo
// var cho phép gắn giá trị trước khi khai báo
as = 10; // gán giá trị
var as; // khai báo 
console.log(as);

// const: khai báo hằng số - không cho phép gán lại giá trị cho biến
// chú ý : khi khai báo const thì phải gán giá trị luôn
const PI = 3.14;
// PI = 10 ;  lỗi khi gán lại giá trị
console.log(PI);


// 2. Template string
// cho phép khai báo và chỉnh sửa chuỗi 1 cách linh hoạt
let studnetname = "Hào"
let classname = "PTIT-HCM-1"
let str = `Hello ${studnetname} đến với lớp ${classname}`;
console.log(str);

// 3. Arrow Function - Hàm mũi tên
// const functionName = () => {}
// trong () là (pramas) : danh sách tham số
// trong {} là (statements): khối lệnh
// Thành phần quan trọng nhất của hàm: pramas (tham số) và return (giá trị trả về)

// bài toán : tạo hàm tính tổng 2 số
// var a = 1;
//  var b = 2;
// // let sum = function (a, b) {
// //     return (a + b);
// // };
// let sum = (a,b) => a + b;

// console.log(sum(a,b));

// bình phương một sô:
var x = 4;
const print = x => Math.pow(x,2);
console.log(print(x))

// 4. Destructoring - phá vỡ cấu trúc áp dụng cho: array và object.

// array
let arrInteger = [1,2,3,4,5];
let [a,c] = arrInteger;
console.log(a,c);

// object 
let student = {
    id: 1,
    name: 'Hào',
    age: 19,
}

let {name, age} = student;
console.log(name, age);

// 5. Rest Parameter - tham số còn lại
// tính tổng n số chưa biết 
const sum = (...param) => {
    // param là 1 array
    return param.reduce((temp,a) => temp + a,0);
}
console.log(sum(1,2,3,4,5)) 
// chú ý: kết hợp với destructoring
let [d,b,...param] = arrInteger;
console.log(param);

// 6. Spread Operator: nhóm lại thành cấu trúc : array và object
let newArray = [1,2,3,4,5];

// thêm hoạc chỉnh sửa thuộc tính object 
student = { ...student, address: "Hào"};
console.log(student);

// 7. For ... of duyệt các phần tử trong mảng ( chỉ dành cho mảng)

//  for (let key of result) {
//     console.log(key); // duyệt theo giá trị của từng phần tử trong mảng
//  }

// không cho phép duyệt đối tượng
// sử dụng for in

for (let key in student) {
    console.log(student[key])
}

let obj = {
    "mã sinh viên" : 1,
    "tên sinh viên": "Hào",
    "tuổi": 18
}
console.log(obj["mã sinh viên"]);


// Bài tập
// Tạo ô input nhập vào 1 số nguyên và 1 button của text là add
// khi ấn vào button add thì thêm số vừa nhập vào 1 mảng
// thực hiện tính toán tổng của các số trong mảng hiển có và hiển thị danh sách các phần tử và tổng đã tính toán ra màn hình.
// tham số còn lại , spread , event Dom, reduce()