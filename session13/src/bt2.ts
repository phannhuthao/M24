abstract class job {
    type :string;
    constructor(type: string) {
        this.type = type;
    }
    printInfo = () => {
        console.log(`Loại công việc: ${this.type}`);
    }
    calculateSalary = () => {
        
    }
    
}

class PartimeJob extends job {
    workingHour: number;
    price: number
    constructor(type: string, workingHour: number, price: number) {
        super(type);
        this.workingHour = workingHour;
        this.price = price;
    }
    printInfo = () => {
        console.log(`Loại công việc: ${this.type} Tổng số tiền là: ${this.calculateSalary()} `);
    } 
    calculateSalary = () => {
      return this.price * this.workingHour;
    }
}

class FulltimeJob extends job {
    price : number;
    constructor(type: string, price: number) {
        super(type);
        this.price = price
    }
    printInfo = () => {
        console.log(`Loại công việc: ${this.type} Lương: ${this.price} `);
    } 
}

let one: PartimeJob = new PartimeJob("Nhân viên bán hàng",8,30000);
let two: FulltimeJob = new FulltimeJob("Trưởng phòng", 10000000);

console.log(one.printInfo());
console.log(two.printInfo());
