var counter=1;

function helper(){
  
  console.log(counter);
  counter=counter+1;
}
console.clear();
setInterval(helper,1*1000)