function TheoDoiPass (sokytumin: number, sokytumax: number) {
    return function (target : any, propertyKey: string) {
        let value: string;
        const getter = function () {
            return value;
        };
        const setter = function (newValue: string) {
            if(newValue.length < sokytumin || newValue.length > sokytumax) {
                throw new Error(`Độ dài mật khẩu phải nằm từ ${sokytumin} đến ${sokytumax}`);
            }
            value = newValue;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

class User {
    username: string;
    @TheoDoiPass(1,6)
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

const OneUser = new User("hào", "234");

console.log(OneUser);
