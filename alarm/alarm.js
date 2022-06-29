let trans = document.getElementById('myAnimation')
let hr=document.getElementById('hr')
let min =document.getElementById('min')
let sec =document.getElementById('sec')
box = document.querySelector(".box"),
Menu = document.querySelectorAll("select")
let inp= document.getElementById('inp')
setAlarmBtn = document.querySelector("button");
let alarmTime, isAlarmSet,
 audio = new Audio("./audio/ringtone.mp3");
// ENDING OF DECLARATION

//   HOUR
for (let i = 12; i >=0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    Menu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
// MINUTES
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    Menu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
// AM/PM
for (let i = 2; i > 0; i--) {
    let mer = i == 1 ? "AM" : "PM";
    let option = `<option value="${mer}">${mer}</option>`;
    Menu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
// SETTING THE DISPLAY
setInterval(() => {
    // DATE DECLARATION
   const dat = new Date()
    hr.innerHTML=dat.getHours()
    min.innerHTML=dat.getMinutes()
    sec.innerHTML=dat.getSeconds()
    trans.innerHTML=inp.value; 
   mer ="AM"; 

    if(hr.innerHTML >=12){
        hr.innerHTML = hr.innerHTML-12;
        mer ="PM";
    }
    //  ADDING '0' ONCE THE NUMBERS ARE LESS THAN 10
    hr.innerHTML=(hr.innerHTML<10)? "0"+ hr.innerHTML:hr.innerHTML;
    min.innerHTML=( min.innerHTML<10)? "0"+  min.innerHTML: min.innerHTML;
    sec.innerHTML=( sec.innerHTML<10)? "0"+  sec.innerHTML: sec.innerHTML;
// SETTING THE ALARM

 if (alarmTime === `${hr.innerHTML}:${ min.innerHTML} ${mer}`) {
    audio.play();
    audio.loop = true;
    trans.style.display = "inherit"
    trans.textContent='ALARM NAME:'+ inp.value
}

 if (alarmTime !== `${hr.innerHTML}:${ min.innerHTML} ${mer}`) {
    audio.pause();
    trans.style.display = "none"
}
});
 
// RESETTING THE ALARM
function setAlarm() {
     
    if (isAlarmSet) {
        alarmTime = "";
         trans.style.display= "none";
        box.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let time = `${Menu[0].value}:${Menu[1].value} ${Menu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }

    alarmTime = time;
    isAlarmSet = true; 
    box.classList.add("disable");
    
    setAlarmBtn.innerText = "Reset";
}
setAlarmBtn.addEventListener("click",setAlarm);

  
