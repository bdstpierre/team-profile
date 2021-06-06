// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('demo.txt', 'utf-8', (err, data) => {
	console.log(data);
})

console.log(`The file contains ${data}`);
