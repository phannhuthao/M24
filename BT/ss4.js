// ES6 12//
/*
     1. default param: tham số mặc định
     2. Includes : kiểm tra tồn tại
     3. StartsWith : kiểm tra chuỗi bắt đầu
     4. EndWish : chuỗi kết thúc bằng
     5. Class : OOP
     6. Modules: Imprert
     7. Promise : lời hứa

*/

// 1. Default param
const sum = (a,b) => {
    console.log("a = ", a);
    console.log("b = ", b);
    console.log("Tổng của a và b: ",a + b);
}
sum(2,5);

// khi mình chuyền một giá trị không xác định vào thì nó sẽ lấy giá trị mặc định 

// 2. Includes: Kiểm tra tồn tại
let arr = [1,2,4,5,6,7,8,9];
let checkNumber = arr.includes(7);
console.log("Kiểm tra: ",checkNumber);

let today = new Date(); // object
let now = new Date(); // object
let student = {     // object
    id: 1,
    name: 'Hào',
}

let arrayObj = [today, student];
console.log(arrayObj.includes(today));

// 3. StartWith: Kiểm tra chuỗi bắt đầu

let string = "Phan Nhựt Hào";
console.log("Kiểm tra chuỗi kí tự bắt đầu trong chuỗi: ", string, string.startsWith("P"));

// 4. EndWith : chuỗi kết thúc
console.log("Kiểm tra chuỗi kí tự kết thúc trong chuỗi: ",string,string.endsWith("hạ"));

// 5. Class : OOP
// các thành phần của 1 đối tượng: thuộc tính và hành vi 
// function student(id, name, age) {
//     s1.id = id;
//     s2.name = name;
//     s3.age = age;
// }
// let s1 = new student(1, "Hạ");
// let s2 = new student(2, "Hào")

// Sử dụng từ khóa "Class"
class Student {
    constructor(id, name, age) {
        this.id = id;   // vừa khai hóa vừa gán thuộc tính
        this.name = name;
        this.age = age;
    }
}
function print() {
    console.log("id:" +this.id+  "| Name: " +this.name+ "|age: "+this.age);
}

// Khời tạo một đối tượng dựa trên 3 thuộc tính trên:
// let s1 = new student(1,"Hào", 19);
// console.log(s1);
// s1.print();

// 4 Đặc điểm của OOP:
// + Extends (Kế thừa)
// + Đóng gói : các thuộc tính bên trong đối tượng không được truy cập trái phép
// + Đa hình (Ghi đè phương thức): Một phương thức hay một hàm có nhiều cách thể hiện khác nhau ( cùng một tên hàm nhưng cách triển khai khác nhau)
// + Trừu tượng: 

// 6. Modules: Impert
// dùng type = "moduel" để lấy các file js
// import lấy file về
// export đẩy file lên

// 7. Promise : lời hứa : xử lí các thao tác đồng bộ trong js
// ví dụ : lấy dữ liệu từ máy chủ về tiêu tốn 1 khoảng thời gian
// nếu promise thành công : trạng thái resovle()
// nếu promise thất bại: trạng thái reject()

// khởi tạo lời hứa
let myPromise = new Promise((resovle, reject) => {
    // thành công
    let data = [1,2,3,4,5,6,7,8,9,10];
    resovle(data);
    // thât bại
    let message = "Đăng ký thất bại";
    reject(message);
})
myPromise.then(
    (data) => {
        console.log(data);
    },
    (message) =>{
        console.log(message);
        // throw new Error(message); // ném lỗi
    }
)
.catch((err) => { // bắt lỗi (thường chỉ ném lỗi trong reaject)
    console.log(err);
})