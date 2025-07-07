console.log("this is a test for loops");
// For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}   


// While loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;
}


// Do-while loop
let k = 0;
do {
    console.log("Do-while loop iteration: " + k);
    k++;
}
while (k < 5);


// For...of loop
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log("For...of loop value: " + value);
}


// For...in loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log("For...in loop key: " + key + ", value: " + object[key]);
    }
}


// Nested loops
for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 2; n++) {
        console.log("Nested loop iteration: m = " + m + ", n = " + n);
    }
}
// Break statement
for (let o = 0; o < 5; o++) {
    if (o === 3) {
        console.log("Breaking out of loop at o = " + o);
        break;
    }
    console.log("Loop iteration: " + o);
}
// Continue statement
for (let p = 0; p < 5; p++) {
    if (p === 2) {
        console.log("Skipping iteration at p = " + p);
        continue;
    }
    console.log("Loop iteration: " + p);
}
// Labelled loops
outerLoop: for (let q = 0; q < 3; q++) {
    for (let r = 0; r < 3; r++) {
        if (r === 1) {
            console.log("Breaking out of outer loop at q = " + q + ", r = " + r);
            break outerLoop;
        }
        console.log("Labelled loop iteration: q = " + q + ", r = " + r);
    }
}
// Infinite loop (commented out to avoid running it)
// while (true) {
//     console.log("This is an infinite loop");
//     break; // Uncomment to break out of the infinite loop
// }
// Looping through a string
const str = "Hello";
for (let s = 0; s < str.length; s++) {
    console.log("Character at index " + s + ": " + str[s]);
}
// Looping through an array with forEach
array.forEach((value, index) => {
    console.log("forEach loop value: " + value + ", index: " + index);
});

// Using map to create a new array
const newArray = array.map((value) => {
    return value * 2;
});
console.log("New array after map: " + newArray);
// Using filter to create a new array with values greater than 2
const filteredArray = array.filter((value) => {
    return value > 2;
});
console.log("Filtered array with values > 2: " + filteredArray);
// Using reduce to sum the values in the array
const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of array values: " + sum);
// Using find to get the first value greater than 2
const foundValue = array.find((value) => {
    return value > 2;
});
console.log("First value greater than 2: " + foundValue);
