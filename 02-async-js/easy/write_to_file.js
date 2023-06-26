const fs = require('fs');

const content = 'this is what we are writing to the text document';

function helper(err){
  if(err!=null){
    console.log(err);
  }
  console.log("file written successfully");
}

fs.writeFile('./write.txt', content, helper);
