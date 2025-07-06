console.log("This is a string doc");

let name1 = "rohan";

console.log(name1);

console.log("length: " + name1.length);
// console.log(name1[0]);
// console.log(name1[1]);
// console.log(name1[2]);
// console.log(name1[3]);
console.log(name1[4]);
console.log((name1[5])||"no input!"); // undefined, as there is no 5th character

let name2 = "Rohan";
let friend = "Akshay";

console.log("His name is " + name2 + " and his friend is " + friend);

console.log(`His name is ${name2} and his friend is ${friend}`); // template literals

let namex = 'Adams D'Angelo'; // this will throw an error
let namey = "Adams D'Angelo"; // this is correct
let namez = `Adams D'Angelo`; // this is also correct
let namew = "Adams D\"Angelo"; // this is also correct

console.log(name1.toUpperCase()); // this will not change the original string, it will return a new string
console.log(name1.toLowerCase()); // this will not change the original string, it will return a new string