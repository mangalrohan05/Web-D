import path from 'path';

// console.log(path);

// let mypath = path.join('about', 'path.js'); // 'about/path.js'

let mypath = "C:\\LOCAL D\\Web Development\\BeckEnd\\V87 - Working with Files\\rohan.txt"
console.log("Base name = ", path.basename(mypath)); // 'V87 - Working with Files'
console.log("Directory of myPath = ",path.dirname(mypath)); // 'C:\\LOCAL D\\Web Development\\BeckEnd'
console.log('myPath = ',mypath)
console.log("Extension of rohan = ", path.extname(mypath)); // '.js'