
'use strict';

const timerButtons = document.getElementById('timer-control');
const breakButtons = document.getElementById('break-buttons');

// startbutton controls the timer starting or not
const startButton = document.getElementsByClassName('start')[0];

// the 'clock' number that ticks down
let number = document.getElementById('text')
// this number is an h1 with the default value off '25:00', it is the main target for the stopwatch functionality


let textTime = '25:00'
// this variable is a mutable string, the base string value will be mutated to another string value in accordance 
// to the option the user has selected IE: if user clicks short break, it will be a string that reads '5:00'
// it also acts as a reference when the timer is reset, setting the textContent off the number variable to the corresponding break length selected.
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
                // will end the interval when it reaches 0
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
number.innerText = textTime;
startButton.disabled = false;   
}



timerButtons.addEventListener('click', (event) => {

    if(event.target.className === 'start'){
        let time = 60 * parseInt(number.innerText);
        startButton.disabled = true;
        startTimer(time,number);
    }

    if(event.target.className === 'stop'){
        number.classList.toggle('pauseInterval')
    }
    
    if(event.target.className === 'reset'){
        reset()
    }

})

breakButtons.addEventListener('click', (event)=> {
    
    if(event.target.className === 'pomodoro'){
        reset()
        number.innerText = '25:00';
        textTime = '25:00';
        let time = 60 * parseInt(number.innerText);
        startTimer(time,number);
    }
    
    if(event.target.className === 'short'){
        reset()
        number.innerText = '25:00';
        textTime = '25:00';
        let time = 60 * parseInt(number.innerText);
        startTimer(time,number);
    }
    if (event.target.className ==='long') {
        reset()
        textTime = '10:00';
        number.innerText = '10:00';
        let time = 60 * parseInt(number.innerText);
        startTimer(time,number)
    } 
})


