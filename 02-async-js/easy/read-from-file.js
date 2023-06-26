const fs = require('fs');

function printIt(err, fileContent) {
  console.log(fileContent);
}

fs.readFile('./read.txt', 'utf8', printIt);
