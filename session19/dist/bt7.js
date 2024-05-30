"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function upperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        // Chuyển đổi kết quả thành viết hoa và trả về
        return result.toUpperCase();
    };
    return descriptor;
}
class VietHoa {
    exampleMethod1() {
        return "hào";
    }
    exampleMethod2() {
        return "hạ";
    }
}
__decorate([
    upperCase
], VietHoa.prototype, "exampleMethod1", null);
__decorate([
    upperCase
], VietHoa.prototype, "exampleMethod2", null);
const char = new VietHoa();
console.log(char.exampleMethod1());
console.log(char.exampleMethod2());
