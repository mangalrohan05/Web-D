// let arr = [1, 3, 5, 7, 11, 13];

// let newarr = arr.map((e) => {
//     return e**2;
// })

// console.log(newarr);

// const greaterThan = (e) => {
//     if(e>30){
//         return true;
//     }
//     return false;
// }

// console.log(newarr.filter(greaterThan));

const n = [1, 3, 5, 7, 9];

const add = (a, b) => {
    return a+b;
}

let sum = n.reduce(add);
console.log(sum);

let na = "Rohan";
na = Array.from(na);
console.log(na);