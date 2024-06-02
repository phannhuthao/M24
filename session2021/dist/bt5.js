"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Order {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}
function validateProduct(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!args[0]) {
                throw new Error('Tên sản phẩm không được để trống');
            }
            if (args[1] <= 0) {
                throw new Error('Giá sản phẩm phải là một số dương');
            }
            if (!args[2]) {
                throw new Error('Mô tả sản phẩm không được để trống');
            }
            if (args[3] < 0) {
                throw new Error('Số lượng tồn kho phải là một số không âm');
            }
        }
    };
}
let Product = class Product {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
};
Product = __decorate([
    validateProduct
], Product);
const validProduct = new Product("Laptop", 1000, "Laptop chơi game", 10);
if (validProduct) {
    console.log("Tạo sản phẩm hợp lệ:", validProduct);
}
const invalidProduct = new Product("", -100, "", -10);
if (invalidProduct) {
    console.log("Tạo sản phẩm không hợp lệ:", invalidProduct);
}
class ProductGeneric {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}
function validateProductGeneric(constructor) {
    return class extends constructor {
        constructor(...args) {
            if (!args[0]) {
                console.error('Tên sản phẩm không được để trống');
                return;
            }
            if (typeof args[1] === 'number' && args[1] <= 0) {
                console.error('Giá sản phẩm phải là một số dương');
                return;
            }
            if (!args[2]) {
                console.error('Mô tả sản phẩm không được để trống');
                return;
            }
            if (typeof args[3] === 'number' && args[3] < 0) {
                console.error('Số lượng tồn kho phải là một số không âm');
                return;
            }
            super(...args);
        }
    };
}
let GenericProduct = class GenericProduct extends ProductGeneric {
    constructor(name, price, description, inStock) {
        super(name, price, description, inStock);
    }
};
GenericProduct = __decorate([
    validateProductGeneric
], GenericProduct);
const validGenericProduct = new GenericProduct("Điện thoại", 800, "Điện thoại mới", 15);
if (validGenericProduct) {
    console.log("Tạo sản phẩm generic hợp lệ:", validGenericProduct);
}
const invalidGenericProduct = new GenericProduct("", -50, "", -5);
if (invalidGenericProduct) {
    console.log("Tạo sản phẩm generic không hợp lệ:", invalidGenericProduct);
}
