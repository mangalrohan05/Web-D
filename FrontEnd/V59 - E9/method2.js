// USing eval to perform operations

let random = Math.random();
console.log(`Random number generated: ${random}`);

let a = prompt("Enter first number: ");
console.log(a);
let b = prompt("Enter second number: ");
console.log(b);
let c = prompt("Enter the operation:  ");
console.log(c);

alert(`The first number is: ${a} and the second number is: ${b} and the operation is: ${c}`);

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random < 0.1){

    c = obj[c];
    console.log(`The operation has been changed to: ${c}`);
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);

} else {
    console.log(`The operation is: ${c}`);
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);

}