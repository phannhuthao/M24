"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class XeOTo {
    constructor(tenxe, giaxe, mauxe) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
}
function addProperties(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.soluotmua = 0;
            this.ngaysx = "22/2/2022";
        }
    };
}
let DecoratedXeOTo = class DecoratedXeOTo extends XeOTo {
};
DecoratedXeOTo = __decorate([
    addProperties
], DecoratedXeOTo);
const oneCar = new DecoratedXeOTo("Lambo", 100000000, "siêu xe");
console.log(oneCar.tenxe);
console.log(oneCar.giaxe);
console.log(oneCar.mauxe);
console.log(oneCar.soluotmua);
console.log(oneCar.ngaysx);
