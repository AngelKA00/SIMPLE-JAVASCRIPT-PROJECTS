// DECLARE VARIABLES

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// setinterval updates for each second, which is given below as 1000
setInterval(() => {
    // variable to get date from system
    let currentTime = new Date();

    // variables to get hrs, min, secs from system
    // checks condition if the hr is less than 10, it will have 0 infront, 
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") +currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") +currentTime.getSeconds();
}, 1000)

