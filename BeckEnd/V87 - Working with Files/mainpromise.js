import fs from 'fs/promises'; // Import the promises API of the fs module for async file operations

let a = await fs.readFile('test2.txt'); // Read the file asynchronously (no async function needed as already in a module context)

console.log(a.toString()); // Convert the buffer to a string and log it

let b = await fs.writeFile('rohan.txt', 'This is a promise example'); // Write to a file asynchronously

console.log(b); // Log the result of the write operation (undefined if successful)