/*const getRemainTime=deadline =>{
let now=new Date(),
remainTime=(new Date(deadline)-now+1000)/1000;
remaindSeconds = ('0'+math.floor(remainTime%60)).slice(-2);
remaindMinutes = ('0'+math.floor(remainTime/60%60)).slice(-2);


return{
    remainTime,
    remaindSeconds,
    remaindMinutes
}
};

const countdown = (deadline,elem,finalmessage)=>{
    const el=document.getElementById(elem);


    const timerUpdate =setInterval(()=> {
        let t = getRemainTime(deadline);
        el.innerHTML=`${t.remaindMinutes}m:${t.remaindSeconds}s`;
        if(t.remainTime<=1){
            clearInterval(timerUpdate)
            el.innerHTML=finalmessage
        }
    },1000) 
}

countdown('Feb 25 2023 10:32:53 GMT-0500','clock','cerrando sesion')

window.onload = updateClock;

var totalTime = 59;
var minutos= 15;

function updateClock() {

document.getElementById('countdown').innerHTML = minutos,totalTime;

if(minutos==0 && totalTime==0){
alert('Final');
}else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
    }
}*
const button = document.querySelector('button');

button.onclick = function() {
  let time_minutes = prompt('Timpo para cerrar sesion?');
  alert('En ' + name + ', la sesion se cerrara automaticamente');
};
*/
function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
    
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function () {


   
    let time_minutes = prompt('Timpo para cerrar sesion?'); // Value in minutes
    
    if(time_minutes>60)
    {
        time_minutes= 60;
    }
    let milisec=time_minutes*60000;
    let time_seconds = 00; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);
    
};

