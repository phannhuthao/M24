"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorater
function validate(validateFn) {
    return function (target, propertyName, descriptor) {
        // Logic
        // lấy ra hàm cần xử lí trước khi chỉnh sửa
        let div = descriptor.value;
        console.log(div);
        // tiếp tục chỉnh sửa hàm
        descriptor.value = (a, b) => {
            // kiểm tra số b
            if (validateFn(b)) {
                // Hợp lệ
                return div(a, b);
            }
            else {
                // Không hợp lệ
                throw new Error("Số nà không thể chia cho 0");
            }
        };
    };
}
// Hàm kiểm tra số có bằng không hay không
const checkNumber = (a) => {
    return a != 0;
};
// Lớp kiểm thử
class Test {
    div(a, b) {
        return a / b;
    }
}
__decorate([
    validate(checkNumber)
], Test.prototype, "div", null);
let oneTest = new Test();
console.log(oneTest.div(3, 2));
console.log(oneTest.div(3, 0));
