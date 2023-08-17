// declare variables
let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
// to clear timer when it goes past 60 seconds
let timer = null;

// stopwatch to perform correctly after each 60 sec, min
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    // declare variables with condition, if hours ot min or sec is
    // less than 10, then 0 must be visible before its running place
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // to display the time
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

// when user clicks on start icon
function watchStart(){
    // if it has some value running, then it stops
    if(timer !== null){ 
        clearInterval(timer);// it stops the running time i.e,interval
    }
    timer = setInterval(stopwatch,1000);// it is set to each 1 sec
}

// when user clicks on stop icon
function watchStop(){
    clearInterval(timer);// it stops the running time i.e,interval
}

// when user clicks on reset icon
function resetStop(){
    clearInterval(timer);// it stops the running time i.e,interval and
    [seconds, minutes, hours] = [0,0,0];// sets all to 0
    displayTime.innerHTML = "00:00:00";// it will display like this
}