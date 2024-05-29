function logFunction(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
    const originalMethod = descriptor.value;

    if (typeof originalMethod === 'function') {
        descriptor.value = function (...args: any[]) {
            console.log(`Tên: ${propertyKey}`);
            console.log(`Tham số: ${JSON.stringify(args)}`);

            const result = originalMethod.apply(this, args);

            console.log(`Kết quả: ${JSON.stringify(result)}`);

            return result;
        };
    }

    return descriptor;
}

class ExampleClass {
    exampleMethod(param1: number, param2: string): string {
        return `param1: ${param1}, param2: ${param2}`;
    }
}

const exampleMethodDescriptor = Object.getOwnPropertyDescriptor(ExampleClass.prototype, 'exampleMethod')!;
logFunction(ExampleClass.prototype, 'exampleMethod', exampleMethodDescriptor);
Object.defineProperty(ExampleClass.prototype, 'exampleMethod', exampleMethodDescriptor);

const instance = new ExampleClass();
instance.exampleMethod(1, "Hào");
