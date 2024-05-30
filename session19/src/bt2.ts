type Validator = (arg: any) => boolean;

function ValidateArgs(...validators: Validator[]) {
    return function<T extends (...args: any[]) => any>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): void {
        const originalMethod = descriptor.value!;

        descriptor.value = function(...args: any[]) {
            for (let i = 0; i < validators.length; i++) {
                if (!validators[i](args[i])) {
                    throw new Error(`Đối số tại vị trí ${i} không thỏa mãn bộ quy tắc.`);
                }
            }
            return originalMethod(...args); 
        } as T;
    };
}

const CheckNumber = (arg: any): boolean => typeof arg === 'number';
const CheckPositive = (arg: any): boolean => arg > 0;
const CheckString = (arg: any): boolean => typeof arg === 'string';

class ViDu {
    @ValidateArgs(CheckNumber, CheckPositive, CheckString)
    exampleMethod(num: number, positiveNum: number, str: string): string {
        return `Số: ${num}, Số dương: ${positiveNum}, Chuỗi: ${str}`;
    }
}

const instance = new ViDu();

console.log(instance.exampleMethod(1, 2, "Hào")); 
