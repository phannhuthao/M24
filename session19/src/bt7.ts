function upperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        // Chuyển đổi kết quả thành viết hoa và trả về
        return result.toUpperCase();
    };
    return descriptor;
}

class VietHoa {
    @upperCase
    exampleMethod1() {
        return "hào";
    }

    @upperCase
    exampleMethod2() {
        return "hạ";
    }
}

const char = new VietHoa();

console.log(char.exampleMethod1());
console.log(char.exampleMethod2()); 

