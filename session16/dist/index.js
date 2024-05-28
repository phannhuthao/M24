"use strict";
// Mảng 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5]; // generic array
let arr3 = new Array(1, 2, 3, 4, 5); // generic array
// fuction in ra tham số truyền vào chưa xác định kiểu dữ liệu
const printf = (word) => {
    console.log(word);
};
const printGeneric = (word) => {
    console.log(word);
};
printGeneric("Tâm Anh");
printGeneric(100);
printGeneric(null);
// Khởi tạo 1 tuple (tuple là một mảng cố định không thay đổi phần tử) từ 2 tham số truyền vào
const getTuple = (a, b) => {
    return [a, b];
};
console.log(getTuple(1, "nam"));
console.log(getTuple(2, "nữ"));
console.log(getTuple(undefined, "Lưỡng tính"));
console.log(getTuple(true, false));
// Các qui tắc cơ bản về đặt tên :
// T : Type
// E : Element
// K : Key
// V : Value
// N : Number
// Bài tập: tạo 1 hàm truyền vào 2 đối sổ: nếu 2 đối số đều là number thì trả về tổng của 2 số đó
// ta dùng Number() + number()
// Nếu cả 2 là chuỗi thì nối chuỗi còn nếu không thì in ra thông báo lỗi "không thể xác định kiểu"
// ta dùng  string() + string()
const TruyenHaiDoiSo = (a, b) => {
    return [a, b];
};
