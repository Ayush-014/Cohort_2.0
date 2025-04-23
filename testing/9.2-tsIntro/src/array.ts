interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function filteredUsers( users: User[]) {
    let adult = [];
    let index = 0;
    for(let i=0; i< users.length; i++){
        if(users[i].age > 18)
            adult[index++] = users[i];
    }

    return adult;
}

// 1.
// type NumberArr = number[];

// function maxValue(arr: NumberArr) {
//     let max = 0;
//     for(let i=0; i<arr.length; i++)
//         max = arr[i]>max ? arr[i] : max;

//     return max;
// }

// maxValue([2,5,7,3,9]); 