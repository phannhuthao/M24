<<<<<<< HEAD
// Class là tập hợp , nhóm các đối tượng có chung đặc điểm là hành vi , là khuôn để tạo ra đối tượng
// Class cũng là 1 Datatype
class Person {
     sex: boolean;
      height: number;
      weight: number;
    constructor(sex: boolean, height: number, weight: number) {
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }
    public CalBMI() {
        return this.weight / this.height
    }
}


class Student extends Person {
    name: string;
    age: number;
    id: string;
    constructor(name:string, age : number, id: string, sex: boolean, height: number, weight: number ) {
        // Gọi tới constructor của Person
        super(sex, height, weight); // Phải được gọi đầu tiên của constructor của lớp con
        this.name = name;
        this.age = age;
        this.id = id;
        // this.balance = balance;
    }
    DoHomeWork() {
        console.log(`${this.name} đang làm bài tập !`);
    }
    // Ghi đè
    ToString() {
        return `Tên: ${this.name} Tuổi: ${this.age} Id: ${this.id} Giới Tính: ${this.sex} Cân Nặng: ${this.weight} Chiều Cao: ${this.height}`
    }
    toString() {}
    ToStringPerson() {
        return super.toString();
    }
}

// Tính kế thừa 
// Sử dụng từ khóa extends để kế thừa lớp khác
let Student1 = new Student("Hạ",19,"1",true,15.8,60);
console.log(Student1.DoHomeWork());
console.log(Student1.ToString()); //  ?? gọi đến thằng con
console.log(Student1.CalBMI());

// Cú pháp khai báo biến: 
let variable : Person // kiểu khai báo là Person
variable = new Student("Huỳnh Tâm Anh", 19, "SV001",true, 50, 1.7); // khởi tạo / kiểu thực tế
// Đối tượng này có thể thực hiện những hành vi hay đặc điểm gì: kiểu khai báo
// Biêt được phương thức ghi đè nào được thực thi
console.log(variable.toString() ); // gọi đến của student ;
variable = new Person(true,1.8,70);
console.log(variable.toString()); // gọi đến của person


// tính bao đóng
// hạn chế quyền truy cập của các tác nhân bên ngoai :
// private, protected , (default) , public 
// public : có thể truy cập ở bất cứ đâu 
// default (ko khai báo từ khóa) : chỉ có thể truy cập trong package
// protected : cho phép truy cập bên ngoài nhưng phải có quan hệ kế thừa
// private : chỉ cho phép truy cập bên trong lớp


class Name {
    id: number = 1;
    name: string = "Hào"
    // constructor là hàm khởi tạo , trùng tên với tên lớp
    // khi không khai báo thì constructor thì mặc định JS tạo constructor 0 tham số
    constructor(name: string, id: number) { 
        this.id =1;
        this.name = "Hào";
    }
    setId(_id : number) { // thay đổi thì gọi set
        // Kiểm tra quyền
        this.id = _id;
    }
    getId() { // lấy ra thì gọi get
        // Kiểm tra quyền
        this.id;
    }
    // Dùng dấu gạch _ thì nó sẽ chọn lấu các phần tử được khai báo ở dưới
    // id: number = 1;
    // name: string = "Hào"
    // constructor(_name: string, _id: number) {
    //     this.id = _id
    //     this.name = _name
    // } 
}

// this trỏ tới đối tượng sinh ra từ lớp đó
let objjj : Name = new Name("Hào", 1);
let objjj1 : Name = new Name("Hạ",2);
// objjj.id =3;

console.log(objjj);
console.log(objjj1);

// 4 Đặc điểm của OOP:
// - Tính kế thừa: -> lớp kế thừa -> từ khóa extends
// - Tính đóng gói: 
// + -> Các thuộc tính phải được khai báo là private
// + -> Các phương thức nên là public 
// - Tính đa hình: -> Một phương thức có thể triển khai theo nhiều cách: thường đi với tính chất kế thường
// - Tính trừu tượng: -> 







// class Person {
//     private sex: boolean;
//     private height: number;
//     private weight: number;
//    constructor(sex: boolean, height: number, weight: number) {
//        this.sex = sex;
//        this.height = height;
//        this.weight = weight;
//    }
//    // getter: lấy ra các thuộc tính private
//    public CalBMI() {
//        return this.weight / this.height
//    }
//    public getSex() {
//     return this.sex;
//    }
//    public getHeight() {
//     return this.height;
//    }

//    // thay đổi giá trị các thuộc dựa vào tham số truyền vào
//    public SetSex(sex: boolean) {
//     this.sex=sex;
//    }
//    public SetWieght(weight: number) {
//     this.weight=weight;
//    } 
// }


// class Student extends Person {
//    name: string;
//    age: number;
//    id: string;
//    balance: number;
//    constructor(name:string, age : number, id: string, sex: boolean, height: number, weight: number, balance: number ) {
//        // Gọi tới constructor của Person
//        super(sex, height, weight); // Phải được gọi đầu tiên của constructor của lớp con
//        this.name = name;
//        this.age = age;
//        this.id = id;
//        this.balance = balance;
//    }
//    public DoHomeWork() {
//        console.log(`${this.name} đang làm bài tập !`);
//    }
//    // Ghi đè
//    ToString() {
//        return `Tên: ${this.name} Tuổi: ${this.age} Id: ${this.id} Giới Tính: ${this.sex} Cân Nặng: ${this.weight} Chiều Cao: ${this.height}`
//    }
//    toString() {}
//    ToStringPerson() {
//        return super.toString();
//    }
// }

// // Tính kế thừa 
// // Sử dụng từ khóa extends để kế thừa lớp khác
// let Student1 = new Student("Hạ",19,"1",true,15.8,60,1);
// console.log(Student1.DoHomeWork());
// console.log(Student1.ToString()); //  ?? gọi đến thằng con
// console.log(Student1.CalBMI());

// // Cú pháp khai báo biến: 
// let variable : Person // kiểu khai báo là Person
// variable = new Student("Huỳnh Tâm Anh", 19, "SV001",true, 50, 1.7,2); // khởi tạo / kiểu thực tế
// // Đối tượng này có thể thực hiện những hành vi hay đặc điểm gì: kiểu khai báo
// // Biêt được phương thức ghi đè nào được thực thi
=======
class Person {
     sex: boolean;
      height: number;
      weight: number;
    constructor(sex: boolean, height: number, weight: number) {
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }
    public CalBMI() {
        return this.weight / this.height
    }
}


class Student extends Person {
    name: string;
    age: number;
    id: string;
    constructor(name:string, age : number, id: string, sex: boolean, height: number, weight: number ) {
        // Gọi tới constructor của Person
        super(sex, height, weight); // Phải được gọi đầu tiên của constructor của lớp con
        this.name = name;
        this.age = age;
        this.id = id;
        // this.balance = balance;
    }
    DoHomeWork() {
        console.log(`${this.name} đang làm bài tập !`);
    }
    // Ghi đè
    ToString() {
        return `Tên: ${this.name} Tuổi: ${this.age} Id: ${this.id} Giới Tính: ${this.sex} Cân Nặng: ${this.weight} Chiều Cao: ${this.height}`
    }
    toString() {}
    ToStringPerson() {
        return super.toString();
    }
}

// Tính kế thừa 
// Sử dụng từ khóa extends để kế thừa lớp khác
let Student1 = new Student("Hạ",19,"1",true,15.8,60);
console.log(Student1.DoHomeWork());
console.log(Student1.ToString()); //  ?? gọi đến thằng con
console.log(Student1.CalBMI());

// Cú pháp khai báo biến: 
let variable : Person // kiểu khai báo là Person
variable = new Student("Huỳnh Tâm Anh", 19, "SV001",true, 50, 1.7); // khởi tạo / kiểu thực tế
// Đối tượng này có thể thực hiện những hành vi hay đặc điểm gì: kiểu khai báo
// Biêt được phương thức ghi đè nào được thực thi
console.log(variable);


// Tính bao đóng
// Hạn chế quyền truy cập của các tác nhân bên ngoài
// Private. protected, (default), public
// Public:
// Default (Không khau báo từ khóa): chỉ có thể truy cập tỏng package







// class Person {
//     private sex: boolean;
//     private height: number;
//     private weight: number;
//    constructor(sex: boolean, height: number, weight: number) {
//        this.sex = sex;
//        this.height = height;
//        this.weight = weight;
//    }
//    // getter: lấy ra các thuộc tính private
//    public CalBMI() {
//        return this.weight / this.height
//    }
//    public getSex() {
//     return this.sex;
//    }
//    public getHeight() {
//     return this.height;
//    }

//    // thay đổi giá trị các thuộc dựa vào tham số truyền vào
//    public SetSex(sex: boolean) {
//     this.sex=sex;
//    }
//    public SetWieght(weight: number) {
//     this.weight=weight;
//    } 
// }


// class Student extends Person {
//    name: string;
//    age: number;
//    id: string;
//    balance: number;
//    constructor(name:string, age : number, id: string, sex: boolean, height: number, weight: number, balance: number ) {
//        // Gọi tới constructor của Person
//        super(sex, height, weight); // Phải được gọi đầu tiên của constructor của lớp con
//        this.name = name;
//        this.age = age;
//        this.id = id;
//        this.balance = balance;
//    }
//    public DoHomeWork() {
//        console.log(`${this.name} đang làm bài tập !`);
//    }
//    // Ghi đè
//    ToString() {
//        return `Tên: ${this.name} Tuổi: ${this.age} Id: ${this.id} Giới Tính: ${this.sex} Cân Nặng: ${this.weight} Chiều Cao: ${this.height}`
//    }
//    toString() {}
//    ToStringPerson() {
//        return super.toString();
//    }
// }

// // Tính kế thừa 
// // Sử dụng từ khóa extends để kế thừa lớp khác
// let Student1 = new Student("Hạ",19,"1",true,15.8,60,1);
// console.log(Student1.DoHomeWork());
// console.log(Student1.ToString()); //  ?? gọi đến thằng con
// console.log(Student1.CalBMI());

// // Cú pháp khai báo biến: 
// let variable : Person // kiểu khai báo là Person
// variable = new Student("Huỳnh Tâm Anh", 19, "SV001",true, 50, 1.7,2); // khởi tạo / kiểu thực tế
// // Đối tượng này có thể thực hiện những hành vi hay đặc điểm gì: kiểu khai báo
// // Biêt được phương thức ghi đè nào được thực thi
>>>>>>> 89e7efa79455b4c71d25007b76d142eff3290041
// console.log(variable);