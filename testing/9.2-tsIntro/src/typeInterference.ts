// 3.
// function isLegal(fn: () => (number)) {
//     setTimeout(() => {
//         const result = fn();
//         console.log("Result after 1 second:", result);
//     }, 1000)

//     // setTimeout(fn, 1000) expects a function with no arguments.
//     // Even if you passed a correct function like ageGetter, it would still be called with no arguments, which would result in NaN because year would be undefined.
// }
// function ageGetter(year: number) : () => number {
//     return () => 2025 - year
// }
// const validation = isLegal(ageGetter(2005));
// console.log(validation);

// 2.
// function isLegal(age: number) : boolean {
//     return age>18;
// }
// console.log(isLegal(19));

// 1. type inference
// function fn(a: number, b: number) : number {
//     return a+b;
// }
// const val = fn(1,2);
// console.log(val);