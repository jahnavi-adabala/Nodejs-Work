const fs = require('fs');
console.log('Start');
const data = fs.readFileSync('example.txt', 'utf8'); // blocks here
console.log('After readSync');
console.log('Done');
