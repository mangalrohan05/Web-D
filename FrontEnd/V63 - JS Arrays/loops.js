let a = [1, 32, 21, 45, 0, 24, 5];

// a.forEach((value, index, a) => {
//     console.log(value, index, a.toString());   
// });


let obj = {
    a: 1,
    b: 2,
    c:3
}

// for(const key in obj) {
//     if(Object.hasOwnProperty.call(obj, key)){
//         const e = obj[key];
//         console.log(key, e);
//     }
// }

for (const iter of a) {
    console.log(iter);
}