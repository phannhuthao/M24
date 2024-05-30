"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ValidateArgs(...validators) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            for (let i = 0; i < validators.length; i++) {
                if (!validators[i](args[i])) {
                    throw new Error(`Đối số tại vị trí ${i} không thỏa mãn bộ quy tắc.`);
                }
            }
            return originalMethod(...args);
        };
    };
}
const CheckNumber = (arg) => typeof arg === 'number';
const CheckPositive = (arg) => arg > 0;
const CheckString = (arg) => typeof arg === 'string';
class ViDu {
    exampleMethod(num, positiveNum, str) {
        return `Số: ${num}, Số dương: ${positiveNum}, Chuỗi: ${str}`;
    }
}
__decorate([
    ValidateArgs(CheckNumber, CheckPositive, CheckString)
], ViDu.prototype, "exampleMethod", null);
const instance = new ViDu();
console.log(instance.exampleMethod(1, 2, "Hào"));
