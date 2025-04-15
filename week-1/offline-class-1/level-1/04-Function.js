//1. higher-order-fnx:
function Add(a) {
    return function(b) {
        return a+b
    }
}
Add(1)(5) //6

//2. object shallow / deep copy:
const person = {
    name: "john",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
//approach 1: shallow copy
const updated = {...person, name: "Bob"}
updated.address.city = "New York"
console.log(person) // person object's address.city will be set to New York as it is shallow copied 

//approach 2: deep copy
//this approach make the code more verbose, more levelmof nesting ->more verbose the code will be, that's why we use libraries
const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};
console.log(person);

//3. updating arrays
const numbers = [1,2,3]

const addedAtLast = [...numbers,4] // 1 2 3 4
const addedAtBegin = [4,...numbers] // 4 1 2 3

const index = numbers.indexOf(2)
const addedBeforeTwo = [
    ...numbers.slice(0,index),
    4,
    ...numbers.slice(index)    
] // 1 4 2 3
