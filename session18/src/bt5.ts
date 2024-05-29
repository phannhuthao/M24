function combineFunctions(...funcs: Function[]): Function {
    return function (...args: any[]) {
        let result: any = args;
        for (const func of funcs) {
            result = func(...result);
        }
        return result;
    };
}

// Sử dụng decorator để kết hợp các hàm lại với nhau
const combinedFunc = combineFunctions(
    (x: number) => x + 1,
    (x: number) => x * 2,
    (x: number) => x - 3
);
const finalResult = combinedFunc(5); 
console.log(finalResult); 
