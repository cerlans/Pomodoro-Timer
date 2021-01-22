
const timerButtons = document.getElementById('timer-control');
let number = document.getElementById('text');


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
                timer = duration;
            }
        } else {
            console.log('nothing')
            
    
        }
   

    }, 1000);
}

timerButtons.addEventListener('click', (event) => {
    let number = document.getElementById('text');

    if(event.target.className === 'start'){
        let time = 60* 25;
         startTimer(time,number);
    }

    if(event.target.className === 'stop'){
        number.classList.toggle('pauseInterval')

    }
    if(event.target.className === 'reset'){
        console.log('reset')
    }

})

