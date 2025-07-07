// T - npm init -y: creates package.json autimatically
// T - npm install express: installs express framework

// const http = require('node:http'); // Import the built-in http module to create an HTTP server
// import http from "http"; // Import the built-in http module to create an HTTP server using ES module syntax


// const hostname = '127.0.0.1'; // Define the hostname for the server
// const port = 3000;  // Define the port number on which the server will listen

// const server = http.createServer((req, res) => { // Create an HTTP server that listens for requests
//     res.statusMessage = 'OK'; // Set the status message for the response
//     res.statusCode = 200; // HTTP status code 200 means OK

//     res.setHeader('Content-Type', 'text/html'); // Set the content type of the response to plain text

//     res.end('<h1> Rohan Mangal </h1><br>'); // End the response and send 'Hello World' as the response body
// });

// server.listen(port, hostname, () => { // Start the server and listen on the specified port and hostname
//     console.log(`Server running at http://${hostname}:${port}/`); // Log a message to the console indicating that the server is running
// });


// nvm use 18.16.0: // Use Node.js version 18.16.0 with nvm (Node Version Manager)





// import {a} from './mymodule.js'; // Import the default export from mymodule.js
// console.log(a); // Log the value of 'a' to the console


// import thing from './mymodule.js'; // Import the default export from mymodule.js using ES module syntax
// console.log(thing,); // Log the imported object to the console

const a = require('./mymodule2.js'); // Import the default export from mymodule2.js using CommonJS syntax
console.log(a, __dirname, __filename); // Log the imported object to the console

(function(exports, require, module, __filename, __dirname) {
    // This is an IIFE (Immediately Invoked Function Expression) that simulates the CommonJS module environment
    // It provides access to exports, require, module, __filename, and __dirname within the function scope
    console.log(exports, require, module, __filename, __dirname); // Log the parameters to the console
});