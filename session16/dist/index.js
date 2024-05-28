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
    if (typeof a === 'number' && typeof b === 'number') {
        return Number(a) + Number(b);
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return String(a) + String(b);
    }
    else {
        return "không thể xác định kiểu";
    }
};
console.log(TruyenHaiDoiSo(4, 2));
console.log(TruyenHaiDoiSo("Hello, ", "world"));
console.log(TruyenHaiDoiSo(1, "world"));
console.log(TruyenHaiDoiSo("Hello", 2));
class Student {
    constructor(weight, height, name) {
        this.weight = weight;
        this.height = height;
        this.name = name;
    }
}
// Tạo một hàm hiển thị thông tin của Person
const printInfoPerson = (human) => {
    console.log(human.height, human.weight);
};
let OneStudent = new Student(60, 1.54, "Hạ");
printInfoPerson(OneStudent);
class ArrayFakeImpl {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
// Khởi tạo đối tượng 
let arrFake = new ArrayFakeImpl();
arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake);
// Generic với phương thức đặc biệt
class Numbers {
    constructor(_so) {
        Numbers.so = _so;
    }
    static calX2() {
        return Numbers.so * 2;
    }
    static sum(a, b) {
        return Number(a) + Number(b);
    }
}
Numbers.so = 0; // chứa có vùng nhớ
let n1 = new Numbers(1);
let n2 = new Numbers(5);
console.log(Numbers.so);
