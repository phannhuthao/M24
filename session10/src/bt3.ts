class Employee {
    name: string;
    company: string;
    phone: number;

    constructor(name: string, company: string, phone:number) {
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