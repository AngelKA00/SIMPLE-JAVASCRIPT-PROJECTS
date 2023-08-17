// declare variables

let backVideo = document.getElementById("backVideo");
let btn = document.getElementById("btn");

btn.onclick = function(){
    backVideo.style.display = "block";

    if(backVideo.paused){
        backVideo.play();
        btn.src = "pause.png";
    }
    else{
        backVideo.pause();
        btn.src = "play.png";
    }
}