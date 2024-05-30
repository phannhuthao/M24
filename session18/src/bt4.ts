type PredicateFn = (a:number) => boolean;

// Hàm decorater
function validate(validateFn: PredicateFn) {
    return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        // Logic
        // lấy ra hàm cần xử lí trước khi chỉnh sửa
        let div = descriptor.value;
        console.log(div);
        // tiếp tục chỉnh sửa hàm
        descriptor.value = (a: number, b: number) => {
            // kiểm tra số b
            if (validateFn(b)) {
                // Hợp lệ
                return div(a,b);
            }else {
                // Không hợp lệ
                throw new Error("Số nà không thể chia cho 0")
            }
        }
    }
}

// Hàm kiểm tra số có bằng không hay không
const checkNumber = (a:number) => {
    return a != 0;
} 

// Lớp kiểm thử
class Test {
    @validate(checkNumber)
    div(a:number, b: number) {
        return a/b;
    }
}

let oneTest = new Test();
console.log(oneTest.div(3,2));
console.log(oneTest.div(3,0));