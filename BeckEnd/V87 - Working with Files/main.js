// const fs = require('fs'); // Import the built-in fs (file system) module to work with files

// // console.log(fs); // Log the fs module to the console

// console.log("Writing to a file...");
// // fs.writeFileSync("test.txt", "Hello World!"); // Synchronously write "Hello World!" to a file named test.txt

// fs.writeFile("test2.txt", "Hello World!", () => { // Asynchronously write "Hello World!" to a file named test.txt
//     console.log("Done!"); //will be displayed after the file is written, if any log is present outside the callback, it will be displayed before this log
// })

// console.log("File written successfully!");  // This log will be displayed immediately after the writeFile call, before the file is actually written

// const fs = require('fs');

// console.log("Writing to a file...");
// fs.writeFile("test2.txt", "Staring a new journey", () => {
//     console.log("Done!");
//     fs.readFile("test2.txt", (err, data) =>{
//         // console.log(err, data);
//         console.log(err, data.toString()); // Convert the buffer to a string and log it
//     })
// })


const fs = require("fs");

fs.writeFile("test2.txt", "Staring a new journey", () => {
    console.log("Done!");   
});

fs.appendFile("test2.txt", "\nJourney continues...", (e, d) =>{
    console.log(e, d.toString()); 
})