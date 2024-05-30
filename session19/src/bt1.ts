function logDecorator<T extends (...args: any[]) => any>(fn: T): T {
    return function (...args: Parameters<T>): ReturnType<T> {
        const result = fn(...args);
        console.log(`Tên: ${fn.name}`);
        console.log(`Tham số: ${JSON.stringify(args)}`);
        console.log(`Kết quả: ${result}`);
        return result;
    } as T;
}

function addObject(a: number, b: number) {
    return a + b;
}
const one = logDecorator(addObject);

one(2,3);