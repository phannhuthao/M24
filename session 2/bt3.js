function allPositiveNumbers(arr) {
    return arr.every(element => element > 0);
}

console.log(allPositiveNumbers([1, 2, 34, 5, 6, 8, 12])); // Kết quả: true
console.log(allPositiveNumbers([-1, -2, -34, 5, 6, 8, -12])); // Kết quả: false
console.log(allPositiveNumbers([])); 
