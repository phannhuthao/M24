
function validateParam(param: any): boolean {
    return typeof param === 'number';
}

// Hàm decorator
function paramValidator(validationFunction: (param: any) => boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        // Định nghĩa một hàm mới cho phương thức được decorator áp dụng
        const decoratedMethod = function (this: Example, ...args: any[]) {
            for (let arg of args) {
                if (!validationFunction(arg)) {
                    console.log(`Tham số không hợp lệ: ${arg}`);
                    return; // Dừng hàm nếu có tham số không hợp lệ
                }
            }
            return originalMethod.apply(this, args);
        };

        // Gán hàm mới cho phương thức
        Object.defineProperty(target, propertyKey, {
            value: decoratedMethod,
            configurable: true,
            enumerable: false,
            writable: true
        });
    };
}
class Example {
    exampleFunction(num: number) {
        console.log("Tham số hợp lệ:", num);
    }
}
// Áp dụng decorator bằng cách gọi decorator function và truyền vào method descriptor
paramValidator(validateParam)(Example.prototype, 'exampleFunction', Object.getOwnPropertyDescriptor(Example.prototype, 'exampleFunction')!);

const example = new Example();

example.exampleFunction(5); // Tham số hợp lệ
example.exampleFunction(2); // Tham số không hợp lệ, thông báo sẽ được in ra
