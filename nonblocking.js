const fs = require('fs');
console.log('Start');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File read finished (inside callback)');
});
console.log('After readFile (this runs before callback)');
