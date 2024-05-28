"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
for (let day in WeekDays) {
    if (isNaN(Number(day))) {
        console.log(day);
    }
}
const KiemTraNgayThangNam = (arr, Day, Week, Month) => {
    if (typeof Day === 'number' && typeof Week === 'number' && typeof Month === 'number') {
        // Thực hiện các hành động mong muốn nếu các tham số đều là số
        console.log('Day:', Day, 'Week:', Week, 'Month:', Month);
    }
    else {
        console.error('Các tham số Day, Week và Month phải là kiểu số');
    }
};
// Kiểm tra hàm với các tham số và in ra kết quả
const testKiemTraNgayThangNam = (arr, Day, Week, Month) => {
    KiemTraNgayThangNam(arr, Day, Week, Month);
};
testKiemTraNgayThangNam([1, 2, 3], 1, 2, 3);
testKiemTraNgayThangNam([1, 2, 3], 'one', 2, 3);
