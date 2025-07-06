/*

let a = prompt("Enter a number: ")
let b = prompt("Enter a second number: ")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not Allowed!")
}

let sum = parseInt(a)+parseInt(b)

alert(`The sum is ${sum}`)

*/



/*
let a = prompt("Enter a number: ")
let b = prompt("Enter a second number: ")


if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not Allowed!")
}

let sum = parseInt(a)+parseInt(b)

try{
    alert(`The sum is ${sum*n}`)
} catch(error){
    console.log(error)
    throw ReferenceError("There is a problem with syntax")
}
*/





/*
try{
    hey;
} catch(err){
    alert("1. "+err.name + "\n2. " + err.message + "\n3. " + err.stack)
}
*/






let a = prompt("Enter a number: ")
let b = prompt("Enter a second number: ")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not Allowed!")
}

let sum = parseInt(a) + parseInt(b)
function main() {

    try {
        console.log(`The sum is ${sum*y}`)
        return true;
    }
    catch(err){
        console.log(err)
        return false;
    }

    finally{
        console.log("Work Completed!")
    }
}

let x = main()
console.log(x)