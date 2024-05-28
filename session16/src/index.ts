// Mảng 
let arr1: number[] = [1,2,3,4,5];
let arr2: Array<number> = [1,2,3,4,5]; // generic array
let arr3: Array<number> = new Array(1,2,3,4,5); // generic array

// fuction in ra tham số truyền vào chưa xác định kiểu dữ liệu

const printf=(word: any) : void => {  // không chặt chẽ
    console.log(word);
}

const printGeneric = <T> (word: T) : void => {    // tạo ra 1  tham số cho kiểu dữ liệu của biến 
    console.log(word);
}

printGeneric("Tâm Anh");
printGeneric(100);
printGeneric(null);

// Khởi tạo 1 tuple (tuple là một mảng cố định không thay đổi phần tử) từ 2 tham số truyền vào

const getTuple = <U,V> (a: U, b: V) : [U, V] => {
    return [a,b];
}
console.log(getTuple(1,"nam"));
console.log(getTuple(2,"nữ"));
console.log(getTuple(undefined, "Lưỡng tính"))
console.log(getTuple(true, false));

// Các qui tắc cơ bản về đặt tên :
// T : Type
// E : Element
// K : Key
// V : Value
// N : Number

// Bài tập: tạo 1 hàm truyền vào 2 đối sổ: nếu 2 đối số đều là number thì trả về tổng của 2 số đó
// ta dùng Number() + number()
// Nếu cả 2 là chuỗi thì nối chuỗi còn nếu không thì in ra thông báo lỗi "không thể xác định kiểu"
// ta dùng  string() + string()

const TruyenHaiDoiSo = <U, V>(a: U, b: V): any => {
    if (typeof a === 'number' && typeof b === 'number') {
        return Number(a) + Number(b);
    } else if (typeof a === 'string' && typeof b === 'string') {
        return String(a) + String(b);
    } else {
        return "không thể xác định kiểu";
    }
}
console.log(TruyenHaiDoiSo(4, 2));
console.log(TruyenHaiDoiSo("Hello, ", "world"));
console.log(TruyenHaiDoiSo(1, "world"));     
console.log(TruyenHaiDoiSo("Hello", 2));        

// Cú pháp phương thức , hàm generic
// Function [tên hàm], <tên kí hiệu của các tham số> (các danh sách tham số): [kiểu trả về] {...}

interface Person {
    weight: number;
    height: number;
}

class Student implements Person {
    weight: number;
    height: number;
    name: string;
    constructor(weight: number, height: number, name: string) {
        this.weight = weight;
        this.height = height;
        this.name = name;
    }
}
// Tạo một hàm hiển thị thông tin của Person
const printInfoPerson = <T extends Person>(human: T) => {  // Bất cứ kiểu dữ liệu nào kế thừa Person đều thỏa mãn T
    console.log(human.height, human.weight);
}

let OneStudent = new Student(60, 1.54, "Hạ");
printInfoPerson(OneStudent);

// Lớp Interface Generic
interface ArrayFake <T> {
    data : T[];
    push(item: T) : void;
    pop(): T; // Xóa cuối và trả về thằng vừa xóa
}

class ArrayFakeImpl <T> implements ArrayFake<T> {
    data: T[] = [];
    push(item: T): void {
        this.data.push(item);
    }
    pop(): T {
        return this.data.pop() as T;
    }
}
// Khởi tạo đối tượng 
let arrFake: ArrayFake <number> = new ArrayFakeImpl <number> ();

arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake)

// Generic với phương thức đặc biệt
class Numbers {
    static so: number = 0; // chứa có vùng nhớ
    constructor(_so: number) {
        Numbers.so = _so;
    }
    static calX2() {
        return Numbers.so* 2;
    }
    static sum<T> (a: T , b: T ) {
        return Number(a) + Number(b);
    }
}

let n1 = new Numbers(1);
let n2 = new Numbers(5);

console.log(Numbers.so);