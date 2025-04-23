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