let n = prompt("Enter number: ");

let f = (n) => n == 1 ? n : n * f(n-1)