// 2. Pick & Partial
// interface User {
//     id?: string,
//     name: string,
//     email?: string,
//     age: number,
//     password?: string,
// };
// type updateProps = Pick<User, 'name' | 'age' | 'email'>
// type updatePropsOptional = Partial<updateProps>

// function updateUser(prop: updatePropsOptional) {
//     //logic
// }


// 1. updating prop: problem-> date type needed to be change in 'updateProps' if changed in 'User'
// interface User {
//     id?: string,
//     name: string,
//     email?: string,
//     age: number,
//     password?: string,
// };
// interface updateProps {
//     name: string,
//     age: number,
//     email: string,
// }

// function updateUser(prop: updateProps) {
//     //logic
// }
// function sumOfAge(a: User, b: User) : number {
//     return a.age + b.age;
// }
// const totalAge = sumOfAge({name: "ronit", age: 21},{name: "rohit", age: 23});
// console.log("sum of age: ", totalAge);