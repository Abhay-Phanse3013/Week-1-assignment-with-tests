function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds= date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    if (hours<10){
      hours='0'+hours;
    }
    if(seconds<10){
      seconds='0'+seconds;
    }
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    console.log(strTime);
  }
  
  function formatAMPM2() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours<10){
      hours='0'+hours;
    }
     if(seconds<10){
      seconds='0'+seconds;
    }
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds;
    console.log(strTime);
  }
  
  setInterval(formatAMPM2, 1 * 1000);