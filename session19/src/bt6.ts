function checkNumber(min: number, max: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            // Kiểm tra giá trị của tham số đầu vào
            for (const arg of args) {
                if (arg < min || arg > max) {
                    throw new Error(`Giá trị của đối số phải nằm trong khoảng từ ${min} đến ${max}`);
                }
            }
            // Gọi hàm gốc với các tham số đã kiểm tra
            return originalMethod.apply(this,args); // this ở đây thường là tham chiếu đến instance của lớp được gọi, tức là instance của SinhVienThi
        };
        return descriptor;
    };
}

class SinhVienThi {
    diem: number;
    constructor(diem: number) {
        this.diem = diem;
    }
    @checkNumber(0, 10)
    hienketqua(diem1: number, diem2: number) {
        return `Điểm 1: ${diem1}, Điểm 2: ${diem2}`;
    }
}

const ThemSinhVien = new SinhVienThi(9); 
console.log(ThemSinhVien.hienketqua(6,8)); 
