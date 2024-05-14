let arr = [10, 5, 20, 15, 25];
let num = 18;

function findMaxLessThanOrEqualTo(arr, num) {
    let filteredArr = arr.filter((element) => element <= num); // Lọc 
    let mappedArr = filteredArr.map((element) => element); // Tạo mảng mới
    
    // Sử dụng find để tìm số lớn nhất trong mảng đã lọc
    let maxNum = mappedArr.reduce((max, curr) => {
        if (curr > max) {
            max = curr;
        }
        return max;
    }, mappedArr[0]);
    return maxNum;
}

let result = findMaxLessThanOrEqualTo(arr, num);
console.log("Số lớn nhất trong mảng nhỏ hơn hoặc bằng", num, "là:", result);
