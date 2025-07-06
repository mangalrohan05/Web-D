// check version = node --version
// check npm version = npm --version

console.log("Starting server...");
// T - node .\server.js

/*
npm init:

package name: practice
version: 1.0.0
description: Practicing Beckend
entry point: server.js
keywords: node js

*/

// installing a package : npm install {name}
// Example: npm install slugify

/*After installing a package, if deleted, reinstall by typing just npm install.
It will read the package.json file and install all the packages listed in the dependencies section.
To install a specific version of a package, use the command:
// npm install {package-name}@{version}
// Example: npm install slugify@1.0.0
*/


var slugify = require('slugify');
let a = slugify("Hello World")
let b = slugify('some string$%^$%^', '_'); // 'some_string'

console.log(a,"\n",b)


