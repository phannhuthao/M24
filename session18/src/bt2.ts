class EClass {
    exampleMethod(a: number, b: number): number {
        let sum = 0;
        for (let i = 0; i < 1e6; i++) {
            sum += a + b;
        }
        return sum;
    }
}

function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const start = Date.now();
        const result = originalMethod.apply(this, args);
        const end = Date.now();
        const executionTime = end - start;

        console.log(`Hàm: ${propertyKey}`);
        console.log(`Tham số: ${JSON.stringify(args)}`);
        console.log(`Thời gian thực thi: ${executionTime} ms`);
        console.log(`Kết quả: ${result}`);

        return result;
    };

    return descriptor;
}
const newInstance = new ExampleClass();

const decoratedMethod = timingDecorator(ExampleClass.prototype, 'exampleMethod', Object.getOwnPropertyDescriptor(ExampleClass.prototype, 'exampleMethod')!);

instance.exampleMethod = decoratedMethod.value;
instance.exampleMethod(5, "Hào");
