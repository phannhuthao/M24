<<<<<<< HEAD
class  Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const car1 = new Vehicle("Fera",1999, "NXN");
const car2 = new Vehicle("Moth",1898,"NXD");

console.log("Car 1 Information:");
console.log("Name: " + car1.name);
console.log("Year: " + car1.year);
console.log("Company: " + car1.company);

console.log("\nCar 2 Information:");
console.log("Name: " + car2.name);
console.log("Year: " + car2.year);
=======
class  Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const car1 = new Vehicle("Fera",1999, "NXN");
const car2 = new Vehicle("Moth",1898,"NXD");

console.log("Car 1 Information:");
console.log("Name: " + car1.name);
console.log("Year: " + car1.year);
console.log("Company: " + car1.company);

console.log("\nCar 2 Information:");
console.log("Name: " + car2.name);
console.log("Year: " + car2.year);
>>>>>>> 89e7efa79455b4c71d25007b76d142eff3290041
console.log("Company: " + car2.company);