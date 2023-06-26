const fs = require('fs');

function removeSpaces(str){
  let size=str.length;
  let answer="";
  
  for(let i=0;i<size;i++){
    if(str[i]==' ' && str[i-1]==' '){
     continue;
    }
    else{
      answer+=str[i];
    }
  }
  return answer;
}

function printer(err){
  if(err){
    console.log(error);
    
  }
  else{
    console.log("file written successfully");
  }
}


function helper(err, fileContent){
 
  const final=removeSpaces(fileContent);
  console.log(final);

  fs.writeFile('write.txt', final , printer);
}

fs.readFile('./read.txt','utf-8',helper);
