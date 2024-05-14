const employees = [
    {
        name: "Phan Nhựt Hào",
        age: 24,
    },
    {
        name: "Nguyễn Thanh Hạ",
        age: 21,
    },
    {
        name: "Nguyễn Ngọc Diệp",
        age: 18,
    }
];

function sortEmployee(employees, sortType) {
    const sortedEmployees = [...employees]; // tạo bản sao
    
    if (sortType === "Increase") {
        sortedEmployees.sort((a, b) => a.age - b.age);
    } else if (sortType === "Decrease") {
        sortedEmployees.sort((a, b) => b.age - a.age);
    } else {
        console.log("Invalid sort type");
        return;
    }
    console.log(`Thứ tự sắp xếp: (${sortType}):`, sortedEmployees);
}

sortEmployee(employees, "Increase");  
sortEmployee(employees, "Decrease");
