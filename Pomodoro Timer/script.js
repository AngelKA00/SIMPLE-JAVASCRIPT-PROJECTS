// declare variables
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 1500;

// to update the timer
function updateTimer(){
    let minutes = Math.floor(timeLeft /60 );// to get the mins
    let seconds = timeLeft % 60; // to get the secs
    // padStart is used to start with 00:00
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    // to display 
    timer.innerHTML = formattedTime;
}

// to start the timer when user clicks on start
function startTimer(){
    interval = setInterval(() => {
        timeLeft--; // time decrease once started
        updateTimer(); // to perform timer function
        // if timer ends
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500; // goes back to original
            updateTimer();
        }
    }, 1000); // functions every 1 sec
}
// to stop the timer when user clicks on stop
function stopTimer(){
    clearInterval(interval);
    updateTimer();
}
// to reset the timer when user clicks on reset
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

// to perfrom when user clicks on button
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);