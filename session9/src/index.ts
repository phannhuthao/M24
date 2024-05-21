// Type Tuple: Mảng cố định

let arrNotChangeLenght: [number, string,boolean];
arrNotChangeLenght = [1,"Hào",true];

// arrNotChangeLenght = 3; // không thể dùng cách gán này
console.log(arrNotChangeLenght);
console.log("1",arrNotChangeLenght[1]);

// Option Readonly
let number = 10; // Khi khai báo ngầm định / literals
let number1 : readonly number[] = [10];

// Type Allias - Kiểu đối tượng
// Từ khóa type
type UserType = {  // Type chỉ đổi tên
    // readonly id : number  // chỉ đọc
    id: number,
    name: string,
    age: number,
}

// từ khóa: interface
interface UserInterface {     // Interface mang 4 tính chất : kế thừa, đa hình , trừ tượng...
    id: number
    name: string
    age: number
}

// từ khóa: class
class UserClass {
    id: number
    name: string
    age: number
    constructor(id:number, name:string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

let user1 = {
    id: 1,
    name: "Nhựt Hào",
    age: 19,
}

// Type Guard
// TypeOf
// Instance of ( kiểm tra dữ liệu của 1 instance (đối tượng) có phải interface hoặc class hay không
let userClass : any = new UserClass(1, "Hạ",19);
let userFake : any = {
    id: 1,
    name: "Hào",
    age: 19,
}

let userCopy = userClass; // gám địa chỉ tham chiếu

userClass.name = "Hào Hạ";
console.log(userClass);
console.log(userCopy);


// Toán tử in : kiểm tra xem 1 thuộc tính có tồn tài trong 1 object hay không

console.log("in"in userClass);
console.log("in"in userClass);
if ("name" in userClass) {
    console.log(userClass.name);
}

// Type Casting

// Có 2 kiêu ép kiểu:
// C1: Toán tử as: như là
let myfunction = (a: number|string, b: number|string) => {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return String(a) + String(b);
    }
}

// let result = myfunction("mot",2) as string;
// console.log(typeof result);

// C2: sử dụng <>
let result = <string> myfunction(1,2);
console.log(typeof result);

// Toán tử Optional chaining ?
// let Username = userFake.nan1 // nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
// nếu không thì trả về undefined
// console.log("username");

let userTest : UserType = {
    id: 1,
    name: userClass,
    age: 19
}

// let username = userTest?.name?.name; // Nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
// console.log(username);

// Toán tử Nullish coalescing "??"
let fullName = user1.name?? "Tên mặc định";
console.log("fullName", fullName)


// BT 2
// Viết một hàm nhận vào một Tuple chứa thông tin về một mặt hàng
// (tên, giá, số lượng). Tính tổng tiền dựa trên giá và số lượng.
// [Tên, giá, số lượng]
// Tính tổng

let product: [string, number, number];
product = ["Bánh", 12500, 3];

function TinhTong(product: [string, number, number]): number {
    const [name, price, quantity] = product;
    return price * quantity;
}

const total = TinhTong(product);
console.log("Tổng giá tiền sản phẩm",total);
