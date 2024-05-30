"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function TheoDoiPass(sokytumin, sokytumax) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length < sokytumin || newValue.length > sokytumax) {
                throw new Error(`Độ dài mật khẩu phải nằm từ ${sokytumin} đến ${sokytumax}`);
            }
            value = newValue;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    TheoDoiPass(1, 6)
], User.prototype, "password", void 0);
const OneUser = new User("hào", "234");
console.log(OneUser);
