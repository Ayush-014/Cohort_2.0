// what is difference btw interface and type & whom to use (use-cases)
// roughly diff:-
//  interfaces can be implemented in classes
//  type let you do unions and intersections


// 3.
type Employee2  = {
    name: string;
    startDate: Date;
};
interface Manager2 {
    name: string;
    department: string;
};

type TeachLead = Employee2 & Manager2;
const t: TeachLead = {
    name: "ayush",
    startDate: new Date(),
    department: "asad",
}

// 2. type lets you define multiple data types
// type GreetArg = number | string | boolean;
// function Greet(id: GreetArg) {
    
// }

// 1.
// type User = {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// interface User2 {
//     firstName: string;
//     lastName: string;
//     age: number;
// } 