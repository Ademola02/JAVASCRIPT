let min =document.getElementById('min')
let sec =document.getElementById('sec')

let down=4;
let count=60;
let countdown;
let start=false;

startBtn.addEventListener('click',function(event){
  if (event.target.innerHTML =='START')
{
   event.target.innerHTML ='PAUSE'
}

else{
  event.target.innerHTML = 'START'
  clearInterval(countdown)
  return;
}
control()
})


function control(){
   countdown=setInterval(()=>{
      
  if(count==0){
    down--
    count=60;
   }
   count--
    if(count == 0 && down == 0){
      down=4
      count=60;
      clearInterval(countdown)
      startBtn.innerHTML='START'
      sec.innerHTML = 0
      return;
    } 
      min.innerHTML = down
      sec.innerHTML= count
}, 100); 
}



function reset(){
  clearInterval(countdown)
  down=4;
  count=60;
  sec.innerHTML='0'+0
  min.innerHTML='0'+5

  startBtn.innerHTML='START'     
}