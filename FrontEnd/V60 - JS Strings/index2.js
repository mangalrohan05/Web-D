let name1 = "rohan";
console.log(name1.slice(2,4));
console.log(name1.slice(2));
// console.log(name1.slice(,4)); // this will throw an error
console.log(name1.slice(-3)); // this will return the last 3 characters of the string

let x = "Rohan Gupta";
console.log(x); // Rohan Gupta
x = x.replace("Gupta", "Mangal");
console.log(x); // Rohan Mangal

let y = "        My name is Rohan Mangal         "; // string with leading and trailing whitespace

console.log(y);

console.log(y.trim()); // removes whitespace from both ends

console.log(name1.concat(" Mangal"));

name1[0] = "x"; // strings are immutable, this will not change the string
console.log(name1); // rohan