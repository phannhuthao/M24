var a = 10; 
a = 1;
console.log(a);

var b = [1,2,3,56,78,12];
console.log(b.push(20));
console.log(b);


var newArray = [...b, a];
console.log(newArray);