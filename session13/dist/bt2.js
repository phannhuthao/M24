"use strict";
class job {
    constructor(type) {
        this.printInfo = () => {
            console.log(`Loại công việc: ${this.type}`);
        };
        this.calculateSalary = () => {
        };
        this.type = type;
    }
}
class PartimeJob extends job {
    constructor(type, workingHour, price) {
        super(type);
        this.printInfo = () => {
            console.log(`Loại công việc: ${this.type} Tổng số tiền là: ${this.calculateSalary()} `);
        };
        this.calculateSalary = () => {
            return this.price * this.workingHour;
        };
        this.workingHour = workingHour;
        this.price = price;
    }
}
class FulltimeJob extends job {
    constructor(type, price) {
        super(type);
        this.printInfo = () => {
            console.log(`Loại công việc: ${this.type} Lương: ${this.price} `);
        };
        this.price = price;
    }
}
let one = new PartimeJob("Nhân viên bán hàng", 8, 30000);
let two = new FulltimeJob("Trưởng phòng", 10000000);
console.log(one.printInfo());
console.log(two.printInfo());
