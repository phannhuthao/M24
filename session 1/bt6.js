Danhsachnhanvien = [
    { id: 1, name: 'Phan Nhựt Hào', age: 19, department: 'IT'},
    { id: 2, name: 'Nguyễn Thanh Hạ', age: 19, department: 'Business Administration' },
    { id: 3, name: 'Nguyễn Ngọc Diệp', age: 18, department: 'Marketing' },
    { id: 4, name: 'David', age: 35, department: 'IT' },
    { id: 5, name: 'Eve', age: 30, department: 'HR' },
]

Danhsachnhanvien.map((Danhsachnhanvien) => {
    if (Danhsachnhanvien.age < 25) {
        console.log('Danh sách các nhân viên nhỏ dưới 25 tuổi: ', Danhsachnhanvien)
    }
})