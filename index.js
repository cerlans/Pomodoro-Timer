
'use strict';

const timerButtons = document.getElementById('timer-control');
const breakButtons = document.getElementById('break-buttons');

// startbutton controls the timer starting or not
const startButton = document.getElementsByClassName('start')[0];

// the 'clock' number that ticks down
let number = document.getElementById('text')
// this number is an h1 with the default value off '25:00', it is the target for the stopwatch functionality

let startTimer = (duration,display) => {
    let timer = duration, minutes, seconds;
    setInterval(() => {
          if(!number.classList.contains('pauseInterval')){
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                reset();
                number.textContent = '0:00';
            }
        } else {
            console.log('nothing')
            
    
        }
   

    }, 1000);
}

//resets the timer value, clears the Interval
function reset(){
    let highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
    
}

breakButtons.addEventListener('click', (event)=> {
    if(event.target.className === 'short'){
        reset()
        number.innerText = '05:00';
        let time = 60 * 5;
        startTimer(time,number)
    }
    if (event.target.className ==='long') {
        reset()
        number.innerText = '10:00';
        let time = 60 * 10;
        startTimer(time,number)
    } 
})


timerButtons.addEventListener('click', (event) => {

    if(event.target.className === 'start'){
        let time = 60 * parseInt(number.innerText);
         startTimer(time,number);
    }

    if(event.target.className === 'stop'){
        number.classList.toggle('pauseInterval')
    }
    
    if(event.target.className === 'reset'){
        console.log('reset')
        reset()
    }

})

