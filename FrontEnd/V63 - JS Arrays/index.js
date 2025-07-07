console.log("Its an array Doc!");

let arr = [1, 2, 3, 4];

// console.log(arr);
// console.log(arr.length);

arr[2] = 10;

for(index in arr){
    // console.log(index, arr[index]);
}

// console.log(arr.toString());
// console.log(arr.join(" and "));

// console.log(arr.pop());

arr.push(120);
// console.log(arr);

arr.shift();
// console.log(arr);

arr.unshift("rohan");
// console.log(arr);

// console.log(arr.length);
delete arr[1];
// console.log(arr);
// console.log(arr.length);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

// console.log(a1.concat(a2, a3));

let arr1 = [1, 4, 2, 6, 8, 3, 0];

// console.log(arr.sort().toString());

arr1.splice(4, 1);
// console.log(arr1);

arr1.splice(1, 2, 10, 20);
// console.log(arr1);