"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkNumber(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Kiểm tra giá trị của tham số đầu vào
            for (const arg of args) {
                if (arg < min || arg > max) {
                    throw new Error(`Giá trị của đối số phải nằm trong khoảng từ ${min} đến ${max}`);
                }
            }
            // Gọi hàm gốc với các tham số đã kiểm tra
            return originalMethod.apply(this, args); // this ở đây thường là tham chiếu đến instance của lớp được gọi, tức là instance của SinhVienThi
        };
        return descriptor;
    };
}
class SinhVienThi {
    constructor(diem) {
        this.diem = diem;
    }
    hienketqua(diem1, diem2) {
        return `Điểm 1: ${diem1}, Điểm 2: ${diem2}`;
    }
}
__decorate([
    checkNumber(0, 10)
], SinhVienThi.prototype, "hienketqua", null);
const ThemSinhVien = new SinhVienThi(9);
console.log(ThemSinhVien.hienketqua(6, 8));
