let a = prompt("Enter the number to find factorial of");
console.log(a);
a = parseInt(a);

function factorial(n){
    let arr = Array.from(Array(n+1).keys());

    console.log(arr.slice(1, ));

    let c = arr.slice(1,).reduce((a, b) => {
        return a*b;
    })
    console.log(c);
    alert(c);
}

factorial(a);
