class Order {
    name: string;
    price: number;
    description: string;
    inStock: number;
    constructor(name: string, price: number, description: string, inStock: number) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}

function validateProduct<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
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

@validateProduct
class Product {
    name: string;
    price: number;
    description: string;
    inStock: number;

    constructor(name: string, price: number, description: string, inStock: number) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}

const validProduct = new Product("Laptop", 1000, "Laptop chơi game", 10);
if (validProduct) {
    console.log("Tạo sản phẩm hợp lệ:", validProduct);
}

const invalidProduct = new Product("", -100, "", -10);
if (invalidProduct) {
    console.log("Tạo sản phẩm không hợp lệ:", invalidProduct);
}

class ProductGeneric<T, U, V, W> {
    name: T;
    price: U;
    description: V;
    inStock: W;

    constructor(name: T, price: U, description: V, inStock: W) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}

function validateProductGeneric<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
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
@validateProductGeneric
class GenericProduct<T, U, V, W> extends ProductGeneric<T, U, V, W> {
    constructor(name: T, price: U, description: V, inStock: W) {
        super(name, price, description, inStock);
    }
}

const validGenericProduct = new GenericProduct("Điện thoại", 800, "Điện thoại mới", 15);
if (validGenericProduct) {
    console.log("Tạo sản phẩm generic hợp lệ:", validGenericProduct);
}

const invalidGenericProduct = new GenericProduct("", -50, "", -5);
if (invalidGenericProduct) {
    console.log("Tạo sản phẩm generic không hợp lệ:", invalidGenericProduct);
}
