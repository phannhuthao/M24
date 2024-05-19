let a1:number = 2;
let a2:string = "2";

console.log(a1 === Number(a2));
console.log(a1 === parseInt(a2));
console.log(a1 === +a2); // So sánh giá trị của a1 với a2 chuyển đổi về số bằng toán tử + (unary plus)