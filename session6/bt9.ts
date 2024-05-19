let inputString: string = "hello world";
let uniqueCharacters: string = "";

let seenCharacters: string[] = [];

for (let char of inputString) {
    // Nếu ký tự chưa xuất hiện trong mảng seenCharacters
    if (seenCharacters.indexOf(char) === -1) {
        // Thêm ký tự này vào mảng seenCharacters và chuỗi kết quả
        seenCharacters.push(char);
        uniqueCharacters += char;
    }
}

console.log(uniqueCharacters);
