function authenticateUser(): boolean {
    // Giả sử người dùng đã được xác thực
    return true;
}

function getUserRole(): string {
    return "admin";
}

// Decorator để kiểm tra xem người dùng đã được xác thực hay chưa
function authenticate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if (!authenticateUser()) {
            throw new Error("Người dùng chưa được xác thực.");
        }
        return originalMethod.apply(this, args);
    }
    return descriptor;
}

// Decorator để kiểm tra xem người dùng có vai trò được yêu cầu hay không
function authorize(requiredRole: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (getUserRole() !== requiredRole) {
                throw new Error("Người dùng không có quyền truy cập vào tài nguyên này.");
            }
            return originalMethod.apply(this, args);
        }
        return descriptor;
    }
}

class people {
    @authenticate
    @authorize("admin")
    exampleFunction() {
        console.log("Truy cập được phép.");
    }
}

const human = new people();
console.log("Người dùng đã được xác thực.");
console.log("Người dùng có vai trò admin.");
human.exampleFunction();
