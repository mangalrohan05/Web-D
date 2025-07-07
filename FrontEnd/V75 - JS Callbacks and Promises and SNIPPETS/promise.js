console.log("This is a promise");



/* resolve():

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Yes I am done!");

        resolve("Rohan");
    }, 3000);
});

prom1.then((a) => {
    console.log(a);
})
*/

/* reject():

let prom2 = new Promise((resolve, reject) => {

    let ran = Math.random();
    if (ran < 0.5) {
        reject("No ran not supporting!");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done!");
            resolve("Rohan");
        }, 1000);
    }
})

prom2.then((a) => {
    console.log(a);
})
*/

// /* catch() for reject:

let prom3 = new Promise((resolve, reject) => {

    let ran = Math.random();

    if (ran < 0.5) {
        reject("Error Found! Refresh");
    } else {
        setTimeout(() => {
            console.log("Successful!");
            resolve("Rohan");
        }, 1000);
    }

})

prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})
// */


let p3 = Promise.all([p1, p2, p3]) //gives result of all the promises in the array, if either rejected then overall rejected!
let p4 = Promise.allSettled([p1, p2, p3]) // gives full result and status of all promises
let p5 = Promise.race([p1, p2, p3]) // gives the priority or fastest promise
let p6 = Promise.any([p1, p2, p3]) // waits for the 1st promise to fulfill and its result becomes the outcome. Throws AggregateError if all promises are rejected
let p7 = Promise.resolve(value) //makes a resolved promise with the given value
let p8 = Promise.reject(error) //makes a rejected promise with the given error



p3.then((a) => {
    console.log(a)
}).catch((e) => {
    console.log(e);
})