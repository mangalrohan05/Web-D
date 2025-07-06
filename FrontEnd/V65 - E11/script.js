



let a = prompt("Enter the number to find factorial of");
let n = a;
const fact = (b = a-1) => {
    while(b!=1){
        n *= b;
        b -= 1;
    }
    return n;
}

alert(fact());