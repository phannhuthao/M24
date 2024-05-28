enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

for (let day in WeekDays) {
    if (isNaN(Number(day))) {
        console.log(day);
    }
}

const KiemTraNgayThangNam = <T>(arr: T[], Day: number, Week: number, Month: number): void => {
    if (typeof Day === 'number' && typeof Week === 'number' && typeof Month === 'number') {
        // Thực hiện các hành động mong muốn nếu các tham số đều là số
        console.log('Day:', Day, 'Week:', Week, 'Month:', Month);
    } else {
        console.error('Các tham số Day, Week và Month phải là kiểu số');
    }
}

// Kiểm tra hàm với các tham số và in ra kết quả
const testKiemTraNgayThangNam = <T>(arr: T[], Day: any, Week: any, Month: any): void => {
    KiemTraNgayThangNam(arr, Day, Week, Month);
}

testKiemTraNgayThangNam([1, 2, 3], 1, 2, 3); 
testKiemTraNgayThangNam([1, 2, 3], 'one', 2, 3); 
