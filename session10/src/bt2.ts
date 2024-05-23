<<<<<<< HEAD
class InfoStudent {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}


let Newstudent: InfoStudent[] = [];


Newstudent.push(new InfoStudent(1, 29, "haophannhut26@gmail.com"));
Newstudent.push(new InfoStudent(2, 19, "hanguyen0520@gmail.com"));
Newstudent.push(new InfoStudent(3, 18, "ngocdiep02502@gmail.com"));

// Duyệt mảng và in ra các sinh viên trong mảng
for (let student of Newstudent) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
=======
class InfoStudent {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}


let Newstudent: InfoStudent[] = [];


Newstudent.push(new InfoStudent(1, 29, "haophannhut26@gmail.com"));
Newstudent.push(new InfoStudent(2, 19, "hanguyen0520@gmail.com"));
Newstudent.push(new InfoStudent(3, 18, "ngocdiep02502@gmail.com"));

// Duyệt mảng và in ra các sinh viên trong mảng
for (let student of Newstudent) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
>>>>>>> 89e7efa79455b4c71d25007b76d142eff3290041
