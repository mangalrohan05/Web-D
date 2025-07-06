console.log("Functions!");

function print(message) {
  console.log(message + "!");
  console.log("This is a function with message: " + message);
}

print("rohan");

function add(a, b) {
  console.log("Adding " + a + " and " + b);
  return a + b;
}

let sum = add(5, 10);
console.log("The sum is: " + sum);

const func1 = (x) => {
  console.log("This is an arrow function with x: " + x);
}

func1(29);