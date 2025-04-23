// 2.
interface Person {
    name: string;
    age: number;
    greet(phase: string) : void;
}
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, x:number) {
        this.name = n;
        this.age = x;
    }

    greet(phase: string) {
        console.log(`Hey ${phase} ${this.name}`);
    }
}
class Manager implements Person {
    name: string;
    age: number;

    constructor(n: string, x: number) {
        this.name = n;
        this .age = x;
    }

    greet(phase: string) {
        console.log(`Hey manager! ${phase} ${this.name}`);
    }
}

const e = new Employee("ayush", 19);
const m = new Manager("ashu",21);

// 1.
// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string; // optional
// }
// function isLegal(user: User) {
//     return user.age > 18;
// }

// const shyam = {
//     firstName: 'radhe',
//     lastName: 'shyam',
//     age: 12,
//     // email: "kbbhkjhk"
// }
// const isValid = isLegal(shyam);
// console.log(isValid);