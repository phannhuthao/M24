
const singleString: string = "Phan Nhựt Hào";
const stringArray: string[] = ["Hào", "Hạ", "Diệp"];

function processInput(input: string | string[]): void {
    if (typeof input === 'string') {
        console.log(input); // In ra chuỗi nếu input là chuỗi
    } else if (Array.isArray(input)) {
        input.forEach(element => console.log(element)); // In ra từng phần tử nếu input là mảng chuỗi
    } else {
        throw new Error("Invalid input type"); // Xử lý trường hợp đầu vào không hợp lệ (không xảy ra với kiểu dữ liệu đã định nghĩa)
    }
}


processInput(singleString); 
processInput(stringArray);
