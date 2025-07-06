/*
* In this example, console gives the output in the order of execution
* of the code, not in the order of the console.log statements.
* output: 
Data 1
Data 2
Data 4
Data 3

* Data 3 print delayed because it is inside a setTimeout function
*This is asynchronous nature of JavaScript



console.log("Data 1")z
console.log("Data 2")

setTimeout(() => {
    console.log("Data 3")
}, 2000)

console.log("Data 4")
*/

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Rohan");

  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
