'use strict';
const timerButtons = document.getElementById('timer-control');
const breakButtons = document.getElementById('break-buttons');
const startButton = document.getElementsByClassName('start')[0];
const settings = document.getElementById('settings');
const tv = document.getElementById('text');

let startTracker;
let textTime;

let startTimer = (duration,display) => {
    let timer = duration, minutes, seconds;
    // the alarm sound effect
    const alarm = document.createElement('audio');
    const source = document.createElement('source');
    source.src = 'https://onlineclock.net/audio/options/default.mp3'
    alarm.append(source);
    
    setInterval(() => {
          if(!display.classList.contains('pauseInterval')){
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                reset()
                display.textContent = '0:00'
                console.log('ring ring ring ring')
                alarm.play()
            }
            
        } else {
            console.log('nothing')
        }
   

    }, 1000);
}
// kills all setIntervals, regardless of ID
function reset(param){
    let highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
const text = document.getElementById('text');
text.textContent = param
startButton.disabled = false;
}

timerButtons.addEventListener('click', (event) => {

    if(event.target.className === 'start'){
    
        startTimer(startTracker,startTracker);
        // the startTracker variable tracks where the timer is corresponding to the option selected
    }

    if(event.target.className === 'stop'){
        
        number.classList.toggle('pauseInterval')

    }

    if(event.target.className === 'reset'){
     reset(textTime)
    }

})


breakButtons.addEventListener('click', (event)=> {
 
    if(event.target.className === 'pomodoro') {
        reset()
        const pomodoro = document.getElementById('Pomodoro');
        const display = document.getElementById('text');
        display.textContent =  `${pomodoro.valueAsNumber}:00`;
        startTracker = 60 * pomodoro.valueAsNumber;
        textTime = `${pomodoro.valueAsNumber}:00`;
        let time = 60 * pomodoro.valueAsNumber;
        startTimer(time,display);
    }

    if(event.target.className === 'short'){
        reset()
        const short = document.getElementById('Short-Break')
        const display = document.getElementById('text');
        display.textContent =  `${short.valueAsNumber}:00`
        startTracker = 60 * short.valueAsNumber;
        textTime = `${short.valueAsNumber}:00`
        let time = 60 * short.valueAsNumber;
        startTimer(time,display);
    }
    if (event.target.className ==='long') {
        reset()
        const long = document.getElementById('Long-Break')
        const display = document.getElementById('text');
        display.textContent =  `${long.valueAsNumber}:00`;
        startTracker = 60 * long.valueAsNumber;
        textTime = `${long.valueAsNumber}:00`;
        let time = 60 * long.valueAsNumber;
        startTimer(time,display)
    } 
})

settings.addEventListener('click',() => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    // is this bad practice?
    window.onclick = function(event) {
        if(event.target.className === 'modal') {
            event.target.style.display = 'none';
        }
    }
})

const test = document.getElementById('short-Break');
const master = document.getElementsByClassName('flex-options')[0];

