type username = string;
type age = number;

interface User {
    name: string,
    age: number,
}

const user : User = {
    name: "Hào",
    age: 19,
}
console.log(user);