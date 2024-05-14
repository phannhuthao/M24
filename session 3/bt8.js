function chenMang(array1, array2, position) {
    if (position < 0 || position > array1.length) {
        console.log("Vị trí không hợp lệ");
        return;
    }

    let newArray = [
        ...array1.slice(0, position),  // Các phần tử trước vị trí chèn
        ...array2,                     // Mảng thứ hai
        ...array1.slice(position)      // Các phần tử sau vị trí chèn
    ];

    return newArray;
}

let a = [1, 2, 3, 7, 8];
let b = ['a', 'b', 'e', 'f'];
let position = 0;

let result = chenMang(a, b, position);
console.log(result);
