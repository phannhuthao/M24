let numbers = [];

function addNumber() {
    let num = document.getElementById("numInput").value;
    numbers.push(parseInt(num));
    document.getElementById("array").innerHTML = "Mảng: " + numbers.join(" ");
    let sum = numbers.reduce((a, b) => a + b, 0);
    document.getElementById("sum").innerHTML = "Tổng: " + sum;
}

