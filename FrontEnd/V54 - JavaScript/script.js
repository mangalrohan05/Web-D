alert("Hello, World!");

console.log("Code is running!");

var a = prompt('Enter a number: ');

console.log('You entered: ' + a);

var isTrue = confirm("Are you sure, you want to proceed?");

if(isTrue) {
    alert("Welcome!");
    console.log("User confirmed the action.");
}
else {
    alert("Goodbye!");
    console.log("User cancelled the action!");
}

function Fevent(){
    alert("Your data has been submitted.")
    console.log("Data submitted!")
}

document.title = "My First JavaScript Page";
document.body.style.backgroundColor = "lightblue";