"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function authenticateUser() {
    // Giả sử người dùng đã được xác thực
    return true;
}
function getUserRole() {
    return "admin";
}
// Decorator để kiểm tra xem người dùng đã được xác thực hay chưa
function authenticate(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (!authenticateUser()) {
            throw new Error("Người dùng chưa được xác thực.");
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
// Decorator để kiểm tra xem người dùng có vai trò được yêu cầu hay không
function authorize(requiredRole) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (getUserRole() !== requiredRole) {
                throw new Error("Người dùng không có quyền truy cập vào tài nguyên này.");
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class people {
    exampleFunction() {
        console.log("Truy cập được phép.");
    }
}
__decorate([
    authenticate,
    authorize("admin")
], people.prototype, "exampleFunction", null);
const human = new people();
console.log("Người dùng đã được xác thực.");
console.log("Người dùng có vai trò admin.");
human.exampleFunction();
