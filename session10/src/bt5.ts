<<<<<<< HEAD
class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    describe(): void {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
}


const accounting = new Department(1, "Accounting", ["Hào", "Hạ", "Diệp"]);
accounting.describe(); 
=======
class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    describe(): void {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
}


const accounting = new Department(1, "Accounting", ["Hào", "Hạ", "Diệp"]);
accounting.describe(); 
>>>>>>> 89e7efa79455b4c71d25007b76d142eff3290041
