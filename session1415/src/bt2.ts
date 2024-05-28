class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends Product {
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.quantity = quantity;
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(): void {
        this.quantity += 1;
    }

    decreaseQuantity(): void {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    }
}

class ShopProduct extends Product {
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.stock = stock;
    }
}

class Cart {
    items: CartProduct[];

    constructor() {
        this.items = [];
    }

    addItem(product: ShopProduct, quantity: number): void {
        if (quantity > product.stock) {
            console.log(`Không thêm thêm ${quantity} of ${product.name} giỏ hàng. Only ${product.stock} in stock.`);
            return;
        }

        const cartProduct = this.items.find(item => item.id === product.id);

        if (cartProduct) {
            if (cartProduct.quantity + quantity > product.stock) {
                console.log(`Không thể thêm ${quantity} nhiều vào ${product.name} giỏ hàng. Chỉ ${product.stock - cartProduct.quantity} left in stock.`);
            } else {
                cartProduct.quantity += quantity;
                console.log(`${quantity} more of ${product.name} thêm vào giỏ hàng.`);
            }
        } else {
            this.items.push(new CartProduct(product.id, product.name, product.price, quantity));
            console.log(`${quantity} of ${product.name} thêm vào giỏ hàng.`);
        }
    }

    removeItem(productId: number): void {
        const index = this.items.findIndex(item => item.id === productId);

        if (index !== -1) {
            console.log(`${this.items[index].name} xóa khỏi giỏ hàng.`);
            this.items.splice(index, 1);
        } else {
            console.log(`ID sản phẩm ${productId} không tìm thấy trong giỏ hàng.`);
        }
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.calculatePrice(), 0);
    }
}

const shopProducts: ShopProduct[] = [
    new ShopProduct(1, "Laptop", 1000, 5),
    new ShopProduct(2, "Phone", 500, 10),
    new ShopProduct(3, "Headphones", 100, 15)
];


const cart = new Cart();

cart.addItem(shopProducts[0], 2);  
cart.addItem(shopProducts[1], 1);  
cart.addItem(shopProducts[2], 3);  

console.log(`Total cart value: $${cart.getTotal()}`);
cart.removeItem(1);  
console.log(`Total cart value after removal: $${cart.getTotal()}`);
