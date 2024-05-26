"use strict";
// // Tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức.
// // Ví dụ: Con người, chiều cao, cân nặng, nói
// // Phương thức trừu tượng: là phương thức không có phần thân
// // Interface - giao diện tính năng
// // + Hỗ trợ đa kế thừa
// // + Không mang các thuộc tính cụ thể
// // + Không cho phép khai báo các phương thức có phần thân
// // + Không yêu cầu từ khóa abstract
// interface Shape {
//     // Khai báo các thuộc tính và phương thức trừu tượng
//     chuVi : number;
//     dienTich: number;
//     // Phương thức trừu tượng
//     tinhChuVi: () => number;
//     tinhDienTich: () => number;
// }
// // Tạo 1 lớp kế thừa và triển khai các phương thức trừu tượng
// class Square implements Shape {
//      chuVi: number = 0;
//      dienTich: number = 0;
//      canh: number;
//      constructor(chuVi: number, dienTich: number, canh:number) {
//         this.chuVi = chuVi;
//         this.dienTich = dienTich;
//         this.canh =canh;
//      }
//      // Phải triển khai toàn bộ các phương thức trừu tượng của interface
//      tinhChuVi = () => {
//         return  this.canh*4;
//      }
//      tinhDienTich = () => {
//         return this.canh * this.canh;
//      }
//      getInfo = () => {}
// }
// let squareOne: Shape = new Square(5,1,2);
// // Abstract class - Lớp trừu tượng: không hỗ trợ đa kế thừa, được phép gán các thuộc tính có giá trị cụ thể, có thể khai báo cá phương thức có phần thân
// abstract class Animal {
//     // Các phương thức và thuộc tinh trừu tượng
//     species: string;
//     sex: boolean;
//     color: string;
//     constructor(species: string, sex: boolean, color: string) {
//         this.species = species;
//         this.sex = sex;
//         this.color = color;
//     }
//     getInfo() {
//         return `Animal ${this.species} Sex: ${this.sex} Color: ${this.color}`;
//     }
//     // Các phương thức trừu tượng
//     abstract makeSound : () => string; 
// }
// class Dog extends Animal {
//     constructor(species: string, sex: boolean, color: string) {
//         super(species, sex, color);
//     }
//     // Triền khai toàn bộ phuowg thức trừu tượng
//     makeSound = () => {
//         return "ẳng ẳng ẳng ẳng";
//     }
// }
// class Cat extends Animal {
//     constructor(species: string, sex: boolean, color: string) {
//         super(species, sex, color);
//     }
//     // Triền khai toàn bộ phuowg thức trừu tượng
//     makeSound = () => {
//         return "Mèo méo meo mèo meo Con mèo ngốc nghếch cute cô mai queo";
//     }
// }
// let DogOne: Animal = new Dog("Su",true,"Black");
// console.log("Con chó kêu: ",DogOne.makeSound());
// let CatOne: Animal = new Cat("Mèo Cam đời còn khổ", false, "Orange");
// console.log("Con mèo kêu:",CatOne.makeSound());
