"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available = true) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
        console.log(`Món ăn menu ${item.name} thêm vào.`);
    }
    addTable(table) {
        this.tables.push(table);
        console.log(`Bảng ${table.id} được thêm vào ${table.capacity}.`);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (table && table.available) {
            table.available = false;
            const reservation = new Reservation(this.reservations.length + 1, customerName, tableId);
            this.reservations.push(reservation);
            console.log(`Table ${tableId} reserved for ${customerName}.`);
        }
        else {
            console.log(`Bàn ${tableId} is not available for reservation.`);
        }
    }
    placeOrder(tableId, items) {
        const table = this.tables.find(t => t.id === tableId);
        if (table && !table.available) {
            const order = new Order(this.orders.length + 1, tableId, items);
            this.orders.push(order);
            console.log(`Món ăn được đặt trên bàn ${tableId}.`);
        }
        else {
            console.log(`Table ${tableId} is not available for placing orders.`);
        }
    }
    generateBill(tableId) {
        const order = this.orders.find(o => o.tableId === tableId);
        if (order) {
            const total = order.getTotal();
            console.log(`Tổng hóa đơn cho bàn ăn ${tableId} is $${total}.`);
            const table = this.tables.find(t => t.id === tableId);
            if (table) {
                table.available = true;
            }
        }
        else {
            console.log(`Menu không trên bàn ${tableId}.`);
        }
    }
}
// Tạo nhà hàng
const restaurant = new Restaurant();
// Thêm món ăn vào menu
restaurant.addMenuItem(new MenuItem(1, "Pizza", 10));
restaurant.addMenuItem(new MenuItem(2, "Pasta", 8));
restaurant.addMenuItem(new MenuItem(3, "Salad", 5));
// Thêm bàn vào nhà hàng
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));
restaurant.addTable(new Table(3, 6));
// Đặt bàn
restaurant.makeReservation("Alice", 1);
restaurant.makeReservation("Bob", 2);
// Đặt món
restaurant.placeOrder(1, [new MenuItem(1, "Pizza", 10), new MenuItem(2, "Pasta", 8)]);
restaurant.placeOrder(2, [new MenuItem(3, "Salad", 5)]);
// Tính tiền
restaurant.generateBill(1);
restaurant.generateBill(2);
