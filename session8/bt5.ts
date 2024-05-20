type Animal = { name: string };
type Bird = { canFly: boolean };

type AnimalOrBird = Animal | Bird;

let creature: AnimalOrBird;


creature = { name: "Dog" };          // Hợp lệ
creature = { canFly: true };         // Hợp lệ
creature = { name: "Sparrow", canFly: true }; // Hợp lệ



type A = { a: string };
type B = { b: number };

type AandB = A & B;

let obj: AandB;


obj = { a: "Hello", b: 42 }; // Hợp lệ

