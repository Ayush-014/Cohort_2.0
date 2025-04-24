// 2. Generic functions (a solution to below problem)
// function identity<T>(arg: T) {
//     return arg;
// }
// let op1 = identity<string>("myString");
// let op2 = identity<number>(100);

// function firstEle2<T>(arr: T[]) {
//     return arr[0]
// }
// const el = firstEle2<string>(["ayush","ashu"]);
// console.log(el.toUpperCase())

// 1. this approach doesn't allow ts to use js functions(as toUpperCase() here)
// type Input = number | string
// function firstEle(arr: Input[]) {
//     return arr[0]
// }

// const value = firstEle(["ayush","ashu"])
// //problem here is that value is not able to infer whether value is a number or a string , thus it is showing error on use of fnx allowed for string as value can be a number
// console.log(value.toUppercase())
