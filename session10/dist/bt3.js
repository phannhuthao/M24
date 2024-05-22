"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name} Company: ${this.company} Phone: ${this.phone}`);
    }
}
let newEmployee = new Employee("Hào", "TTTT", 1229184298);
console.log(newEmployee.printInfo());
