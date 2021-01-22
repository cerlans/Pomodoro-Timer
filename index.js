let number = document.getElementById('text');

const button = document.getElementById('button');




function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
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


button.addEventListener('click',function(){

    let time = 60 * 25 
    // the amount off time corresponding to the display variable
    let display = number
    
    // the text variable in the html side off the project
    startTimer(time,display)    
})

const stop = document.getElementById('stop')

stop.addEventListener('click',() => number.classList.toggle('pauseInterval'))
//doesnt technically 'stop' the timer, rather it keeps running in the background, it just doesn't increment the value
