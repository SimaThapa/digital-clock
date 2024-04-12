function DigitalClock(){


  var seconds=new Date().getSeconds();
  var minutes=new Date().getMinutes();
  var hours=new Date().getHours();
  
  
  document.getElementById('hours').innerText= hours ;
  document.getElementById('minutes').innerText= minutes; 
  document.getElementById('seconds').innerText= seconds;
  

}

setInterval(function(){
 DigitalClock();
},1000)