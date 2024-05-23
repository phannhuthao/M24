<<<<<<< HEAD
const singleNumber: number = 3;
const numberArray: number[] = [2, 4, 6, 8];

function NhanSo(input: number | number[]): number | number[] {
    if (typeof input === 'number') {
        return input * input; 
    } else if (Array.isArray(input)) {
        return input.map(num => num * num); 
    } else {
        throw new Error(""); 
    }
}


console.log(NhanSo(singleNumber)); 
console.log(NhanSo(numberArray));  
=======
const singleNumber: number = 3;
const numberArray: number[] = [2, 4, 6, 8];

function NhanSo(input: number | number[]): number | number[] {
    if (typeof input === 'number') {
        return input * input; 
    } else if (Array.isArray(input)) {
        return input.map(num => num * num); 
    } else {
        throw new Error(""); 
    }
}


console.log(NhanSo(singleNumber)); 
console.log(NhanSo(numberArray));  
>>>>>>> ddc9f7953e0b57e05018e1934c71335f98779180
