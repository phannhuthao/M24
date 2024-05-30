class XeOTo {
    tenxe: string;
    giaxe: number;
    mauxe: string;
    constructor(tenxe: string, giaxe: number, mauxe: string) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
}

function addProperties<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        soluotmua: number = 0;
        ngaysx: string = "22/2/2022";
    }
}

interface DecoratedXeOTo extends XeOTo {
    soluotmua: number;
    ngaysx: string;
}

@addProperties
class DecoratedXeOTo extends XeOTo {}

const oneCar = new DecoratedXeOTo("Lambo", 100000000, "siêu xe");

console.log(oneCar.tenxe);
console.log(oneCar.giaxe);  
console.log(oneCar.mauxe);  
console.log(oneCar.soluotmua);  
console.log(oneCar.ngaysx); 
