const TraVeGiaTri = <U, V>(a: U, b: V): { first: U, second: V } => {
    return { first: a, second: b };
}


const result1 = TraVeGiaTri(1, "string");
console.log(result1); 

const result2 = TraVeGiaTri(true, [1, 2, 3]);
console.log(result2); 

const result3 = TraVeGiaTri({ name: "Alice" }, { age: 30 });
console.log(result3); 

const result4 = TraVeGiaTri(123, null);
console.log(result4);

const result5 = TraVeGiaTri(undefined, "hello");
console.log(result5); 
